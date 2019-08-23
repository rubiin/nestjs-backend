import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import * as Minio from 'minio';

const minioClient = new Minio.Client({
    endPoint: 'play.min.io',
    port: 9000,
    useSSL: true,
    accessKey: 'Q3AM3UQ867SPQQA43P2F',
    secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG'
});


const isObjectEmpty = (obj: any): boolean => {
    if (Object.keys(obj).length === 0) {
        return true;
    }
    else {
        return false;
    }
};


const copyObject = (objSrc: any, objDes: any): any => {

    Object.keys(objSrc).forEach((key) => {

        objDes[key] = objSrc[key];

    });
    return objDes;

};

const TypeOrmErrorHandler = (err) => {

    switch (err.code) {
        case '23505':
            throw new ConflictException('Username Exists');

        default:
            throw new InternalServerErrorException();

    }

};

const multerConfig = {
    limits: { fileSize: 1 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        // accept image only

        if (!file.originalname.toLowerCase().match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Only image files are allowed!'), false);
        }
        cb(null, true);
    }
};


export { multerConfig, isObjectEmpty, copyObject, TypeOrmErrorHandler, minioClient };