var aws = require('aws-sdk');
var multer = require('multer');
var multerS3 = require('multer-s3');
 

const keys = require('../config/keys');

aws.config.update({
    secretAccessKey: keys.s3KeySecret,
    accessKeyId: keys.s3Key,
    region: 'us-west-1'
});

var s3 = new aws.S3

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(new Error('Invalid Mime Type, only JPEG and PNG'), false);
    }
  }

var upload = multer({
  fileFilter,
  storage: multerS3({
    s3,
    bucket: 'ecom-prod',
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + '-' + file.originalname)
    }
  })
})

module.exports = upload;