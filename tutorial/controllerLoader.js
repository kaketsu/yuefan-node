const fs = require('fs');


function load(path) {
    const url = path;
    const dir = fs.readdirSync(url);
    return dir.map((filename) => {
        const module = require(`${url}\\${filename}`);
        return { name: filename.split('.')[0], module };
    })
}

function loadController() {
    const url = './controller';
    return load(url);
}

module.exports = {
    loadController
}

// 最后serverLoader 和 controllerLoader 变为一个loader
