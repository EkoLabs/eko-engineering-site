const path = require('path');
const fs = require('fs');
const ChildProcess = require('child_process')

const yargs = require('yargs');
const archiver = require('archiver');
const AWS = require('aws-sdk');
AWS.config.region = process.env.AWS_REGION; // set your Environment Variables...

const lambda = new AWS.Lambda();

let skipHashCheck = yargs.argv.skipHashCheck;
let noUpload = yargs.argv.noUpload;

function updateLambdaCode(lambdaDirName){
    let package = require(`../lambdas/${lambdaDirName}/package.json`);
    let functionName = package.name;

    let latestCommitHash = ChildProcess.execSync('git rev-parse --short HEAD').toString().trim();

    lambda.getFunctionConfiguration({ FunctionName: functionName }).promise()
        .then(originalLambda => {
            if (skipHashCheck || originalLambda.Description !== latestCommitHash){
                console.log(`Old lambda code hash is ${originalLambda.Description}, new is ${latestCommitHash}. Updating lambda code`);
                createZipAndUploadLambda(lambdaDirName, functionName, latestCommitHash)
            } else {
                console.log('Lambda code is identical. Skipping update');
            }
        })
        .catch(err => { throw err });
}

function createZipAndUploadLambda(lambdaDirName, functionName, hash){
    let basePath = process.cwd();
    let lambdaDirPath = path.join(basePath, "lambdas/",lambdaDirName);
    let zipFilePath = path.join(lambdaDirPath, `/${lambdaDirName}.zip`);

    // create zip
    const archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
    });
    const output = fs.createWriteStream(zipFilePath);
    archive.glob('**.!(zip)', {cwd: lambdaDirPath}); // add all files in the dir, ignore zip files
    archive.pipe(output);


    output.on('close', function() {
        console.log(`Zip file written. ${archive.pointer()} total bytes`);

        let  UPDATE_CONFIG = {
            FunctionName: functionName,
            Description: hash
        };

        let UPDATE_PARAMS = {
            FunctionName: functionName,
            ZipFile: fs.readFileSync(zipFilePath)
        };

        if (noUpload){
            console.log("Dry run - skipping actual upload")
        } else {
            lambda.updateFunctionConfiguration(UPDATE_CONFIG).promise()
                .then( response => lambda.updateFunctionCode(UPDATE_PARAMS).promise())
                .then( response => console.log(`lambda code for ${lambdaDirName} updated!`))
                .catch( err => { throw err });
        }
    });

    archive.finalize();
 }

if (yargs.argv.lambda){
    updateLambdaCode(yargs.argv.lambda);
}

module.exports = updateLambdaCode;
