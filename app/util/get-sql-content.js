const fs = require('fs');
const getSql = require('./get-sql');

let sqlContentMap = {};

/**
 * 读取sql文件内容
 * @param  {string} fileName 文件名称
 * @param  {string} path     文件所在的路径
 * @return {string}          脚本文件内容
 */


const getSqlContent = (fileName, path) => {
    const content = fs.readFileSync(path, 'binary');
    sqlContentMap[fileName] = content;
};

const  getSqlContentMap =() => {
    let sqlMap = getSql();
    console.log(sqlMap);
    for(let key in sqlMap ) {
        getSqlContent(key, sqlMap[key]);
    }

    return sqlContentMap;
}

module.exports = getSqlContentMap;