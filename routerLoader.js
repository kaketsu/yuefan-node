//routerLoader.js
const router = require('koa-router');
const Router = new router();
const fs = require('fs');

const User = require('./router/user');//倒入模块

/**
 * 添加router
 */
const addRouters = (router) => {
    Object.keys(router).forEach((key) => {
        const route = key.split(' ');
        console.log(route);

        console.log(`正在映射地址:${route[1]}--->HTTP Method:${route[0].toLocaleUpperCase()}--->路由方法:${router[key].name}`)
        Router[route[0]](route[1], router[key]);
        // Router['get']('/', () => {});
    })
}

/**
 * 扫描目录
 */
const Scan = () => {
    const url = './router';
    const dir = fs.readdirSync(url)//同步方法无所谓的，因为是在服务器跑起来之前就完成映射，不会有任何性能影响

    dir.forEach((filename) => {
        const routerModel = require(url + '/' + filename);
        addRouters(routerModel);
    })
}

/**
 * 返回router中间件
 */
const setRouters = () => {
    // addRouters(User);  // 添加自动扫描
    Scan();
    return Router.routes()
}

module.exports = setRouters;
