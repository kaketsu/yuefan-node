const walkFile = require('./walk-file');

const getSqlFileList = () => {
    let basePath = __dirname;
    basePath = basePath.replace(/\\/g, '/');

    let pathArr = basePath.split('/');
    pathArr = pathArr.splice( 0, pathArr.length - 1 );
    basePath = pathArr.join('/') + '/init/sql/';
    
    const fileList = walkFile(basePath, 'sql');
    return fileList;
};

module.exports = getSqlFileList;