const path = require('path');
const fs = require('fs');
const ChildProcess = require('child_process')
const hashFiles = require('hash-files');

const yargs = require('yargs');
const archiver = require('archiver');
const AWS = require('aws-sdk');
AWS.config.region = process.env.AWS_REGION || "us-east-1";

const lambda = new AWS.Lambda();

let noUpload = yargs.argv.noUpload;

const GLOB = '**/*.!(zip)';

function updateLambdaCode(lambdaDirName){
    let package = require(`../lambdas/${lambdaDirName}/package.json`);
    let functionName = package.name;

    let basePath = process.cwd();
    let lambdaDirPath = path.join(basePath, "lambdas/",lambdaDirName);


    runNpmInstall(lambdaDirPath)
    .then(
        () => Promise.all([
            createZip(lambdaDirPath),
            hashContent(lambdaDirPath),
            lambda.getFunctionConfiguration({ FunctionName: functionName }).promise()
        ])
    )
    .then(promiseValues => {
        [zipFilePath, contentHash, lambdaValue] = promiseValues;

        if (lambdaValue.Description !== contentHash){
            console.log(`Old lambda code hash is ${lambdaValue.Description}, new is ${contentHash}. Updating lambda code`);
            uploadLambda(functionName, zipFilePath, contentHash)
        } else {
            console.log(lambdaValue.Description, contentHash);
            console.log('Lambda code is identical. Skipping update');
        }
    })
    .catch(err => { throw  new Error(err) });

}

function runNpmInstall(lambdaDirPath){
    console.log("Running npm install in lambda dir");
    return new Promise((resolve, reject) => {
        ChildProcess.exec('npm install', {cwd: lambdaDirPath}, (err, stout, sterr) => {
            if (err) {
                reject({err, sterr});
            } else {
                console.log("Done running npm install");
                resolve(stout);
            }
        });
    });
}

function hashContent(lambdaDirPath){
    let hashGlob = path.join(lambdaDirPath, GLOB);
    return new Promise((resolve,reject) => {
        console.log(`hashContent: Hashing dir content... ${hashGlob}`);
        hashFiles({files: hashGlob}, function(error, hash) {
            if (error){
                reject(error);
            } else {
                console.log('hashContent: Done hashing:', hash);
                resolve(hash)
            }
        });
    })

}

function createZip(lambdaDirPath){
    let lambdaDirName = path.basename(lambdaDirPath);
    let zipFilePath = path.join(lambdaDirPath, `/${lambdaDirName}.zip`);
    console.log(`createZip: Writing zip file: ${zipFilePath}`);

    // create zip
    const archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
    });
    const output = fs.createWriteStream(zipFilePath);
    archive.glob(GLOB, {cwd: lambdaDirPath}); // add all files in the dir, ignore zip files
    archive.pipe(output);

    let promise = new Promise((resolve, reject) => {
        // good practice to catch this error explicitly
        archive.on('error', function(err) {
            reject(err)
        });


        output.on('close', function() {
            console.log(`createZip: Zip file written. ${archive.pointer()} total bytes`);
            resolve(zipFilePath)
        });
    })

    archive.finalize();

    return promise;
}

function delay(t, v) {
    return new Promise(resolve => setTimeout(resolve, t, v));
}

function uploadLambda(functionName, zipFilePath, description){
    let UPDATE_CONFIG = {
        FunctionName: functionName,
        Description: description,
        Runtime: 'nodejs16.x'
    };
    let UPDATE_PARAMS = {
        FunctionName: functionName,
        ZipFile: fs.readFileSync(zipFilePath)
    };

    if (noUpload){
        console.log("Dry run - skipping actual upload")
    } else {
        lambda.updateFunctionConfiguration(UPDATE_CONFIG).promise()
            .then( resposne => delay(3000))
            .then( response => lambda.updateFunctionCode(UPDATE_PARAMS).promise())
            .then( response => console.log(`lambda code for ${functionName} updated!`))
            .catch( err => { throw  new Error(err) });
    }
}

if (yargs.argv.lambda){
    updateLambdaCode(yargs.argv.lambda);
}


module.exports = updateLambdaCode;
