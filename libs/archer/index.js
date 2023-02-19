'use strict';

const AWS = require('aws-sdk');
AWS.config.update({
    region: 'us-east-1'
});

const smngr = new AWS.SecretsManager();

function getSecret(secretName) {
    console.log('000');
    const paramsPromise = new Promise((resolve, reject) => {
        const params = {
            SecretId: secretName,
        };
        console.log('111');
        smngr.getSecretValue(params, (err, data) => {
            console.log('222');
            if (err) {
                console.log('3333', err);
                reject(err);
            } else {
                let secretStr;
                console.log('444');
                if ('SecretString' in data) {
                    console.log('555');
                    secretStr = data.SecretString;
                } else if ('SecretBinary' in data) {
                    console.log('666');
                    try {
                        console.log('777');
                        const buff = Buffer.from(data.SecretBinary, 'base64');
                        secretStr = buff.toString('ascii');
                    } catch (buffErr) {
                        console.log('888', buffErr);
                        reject(buffErr);
                    }
                } else {
                    console.log('999');
                    reject(new Error('no secret in response'));
                }
                console.log('1000');
                resolve(secretStr);
            }
        });
    });

    return paramsPromise.then(secretStr => {
        let secretObj = JSON.parse(secretStr);
        return secretObj;
    }, err => {
        throw err;
    });
}

const secretNameTemplate = (env, secretDomain) => `${env}/${secretDomain}`;

class Archer {
    constructor() {
        this.env = process.env.NODE_ENV || 'testing';
        console.log(`[archer] initialized - env "${this.env}"`);

        // When jest sets NODE_ENV to `test`, we really want `testing`
        // because our Secrets don't start with test/ they start with testing/
        // https://stackoverflow.com/questions/48461394/node-env-with-jest
        if (this.env === 'test') {
            this.env = 'testing';
            console.log(`[archer] overriding env "test" to env "${this.env}"`);
        }
    }

    async get(domain) {
        // create secret name string
        let path = secretNameTemplate(this.env, domain);
        // fetch secret from secrets manager
        try {
            console.log(`[archer] getting for path ${path}`);
            let secreteObj = await getSecret(path);
            console.log(`[archer] secret retrieved successfuly ${path}`);
            return secreteObj;
        } catch (err) {
            console.error(`error in path ${path}`, err, err.stack);
            throw err;
        }
    }
}

const instance = new Archer();
module.exports = instance;
