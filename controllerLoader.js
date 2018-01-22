const fs = require('fs');

function loadController() {
    const url = './controller';
    const dir = fs.readdirSync(url); // 同步方法无所谓的，因为是在服务器跑起来之前就完成映射，不会有任何性能影响

    return dir.map((filename) => {
        const controller = require(url + '/' + filename);
        return { name: filename.split('.')[0], controller };
    })
}

module.exports = loadController;
