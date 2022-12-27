const AWS = require('aws-sdk');
require('dotenv').config();

const BUCKET_USER_ID = process.env.BUCKET_USER_ID;
const BUCKET_USER_SECRET = process.env.BUCKET_USER_SECRET;
const BUCKET_NAME = process.env.BUCKET_NAME;
const BUCKET_REGION = process.env.BUCKET_REGION;

const uploadFile = async (req, res) => {
    const { path, imageName } = req.body;

    const buffer = new Buffer.from(path, 'base64');
    AWS.config.update({
        region: BUCKET_REGION,
        accessKeyId: BUCKET_USER_ID,
        secretAccessKey: BUCKET_USER_SECRET
    })

    const s3 = new AWS.S3();

    const uploadParams = {
        Bucket: BUCKET_NAME,
        Key: imageName,
        Body: buffer,
    }

    s3.putObject(uploadParams).promise();
    return res.send('Archivo subido')
}

module.exports = {
    uploadFile
}
