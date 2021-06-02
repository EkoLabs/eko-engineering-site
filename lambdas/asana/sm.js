const AWS = require('aws-sdk');
const sm = new AWS.SecretsManager({ region: 'us-east-1' });

module.exports = {
    getSecret: function(SecretId) {
        return new Promise((resolve, reject) => {
            sm.getSecretValue({ SecretId }, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(JSON.parse(result.SecretString));
                }
            });
        });
    }
};