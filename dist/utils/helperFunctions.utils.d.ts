declare const minioClient: any;
declare const isObjectEmpty: (obj: any) => boolean;
declare const copyObject: (objSrc: any, objDes: any) => any;
declare const TypeOrmErrorHandler: (err: any) => never;
declare const multerConfig: {
    limits: {
        fileSize: number;
    };
    fileFilter: (req: any, file: any, cb: any) => any;
};
export { multerConfig, isObjectEmpty, copyObject, TypeOrmErrorHandler, minioClient, };
