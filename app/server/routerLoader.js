const router = require('koa-router');
const appRouter = new router();
const fs = require('fs');

const addRouters = (routerModule) => {
    for (let k of Object.keys(routerModule)) {
        const [method, route] = k.split(' ');
        // console.log(`正在映射地址:${route}--->HTTP Method:${method.toLocaleUpperCase()}--->路由方法:${routerModule[k]}`);
        appRouter[method](route, routerModule[k]);
    }
};

const Scan = () => {
    const url = '/router';
    let basePath = __dirname;
    basePath = basePath.replace(/\\/g, '/');
    const dir = fs.readdirSync(basePath + url);  //同步方法无所谓的，因为是在服务器跑起来之前就完成映射，不会有任何性能影响
    dir.forEach((filename) => {
        const routerModule = require(basePath + url + '/' + filename);
        addRouters(routerModule);
    });
};

Scan();
module.exports = appRouter;