import { ConflictException, InternalServerErrorException } from '@nestjs/common';

const isObjectEmpty = (obj: any): boolean => {
    if (Object.keys(obj).length === 0) {
        return true;
    }
    else {
        return false;
    }
};


const copyObject = (objSrc: any, objDes: any): any => {

    Object.keys(objSrc).forEach(key => {

        objDes[key] = objSrc[key];

    });
    return objDes;

};

const TypeOrmErrorHandler = err => {

    switch (err.code){
        case '23505':
            throw new ConflictException('Username Exists');

        default:
            throw new InternalServerErrorException();

    }

};

export { isObjectEmpty, copyObject, TypeOrmErrorHandler };