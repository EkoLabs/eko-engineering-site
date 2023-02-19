'use strict';

const AWS = require('aws-sdk');
AWS.config.update({
    region: 'us-east-1'
});

const smngr = new AWS.SecretsManager();

function getSecret(secretName) {
    const paramsPromise = new Promise((resolve, reject) => {
        const params = {
            SecretId: secretName,
        };
        smngr.getSecretValue(params, (err, data) => {
            if (err) {
                reject(err);
            } else {
                let secretStr;
                if ('SecretString' in data) {
                    secretStr = data.SecretString;
                } else if ('SecretBinary' in data) {
                    try {
                        const buff = Buffer.from(data.SecretBinary, 'base64');
                        secretStr = buff.toString('ascii');
                    } catch (buffErr) {
                        reject(buffErr);
                    }
                } else {
                    reject(new Error('no secret in response'));
                }

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
