const fs = require('fs');

function loader(path) {
    const url = path;
    const dir = fs.readdirSync(url); // 同步方法无所谓的，因为是在服务器跑起来之前就完成映射，不会有任何性能影响
    return dir.map((filename) => {
        const module = require(url + '/' + filename);
        return { name: filename.split('.')[0], module };
    });
}


function loadController() {
    const url = `${__dirname}/controller`;
    return loader(url);
}

function loadService() {
    console.log(__dirname);
    const url = `${__dirname}/service`;
    return loader(url);
}

module.exports = {
    loadController,
    loadService
};
