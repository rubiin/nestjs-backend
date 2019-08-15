const isObjectEmpty = obj => {
    if (Object.keys(obj).length){
        return true;
    }
    else{
        return false;
    }
};


const copyObject = (objSrc: any, objDes: any): any => {

Object.keys(objSrc).forEach(key => {

objDes[key] = objSrc[key];

});
return objDes;

};