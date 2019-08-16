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

export { isObjectEmpty, copyObject };