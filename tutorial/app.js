const koa = require('koa');

const setRouters = require('./routerLoader');//引入router中间件

const loader = require('./loader');
const controllers = loader.loadController();
koa.prototype['controller'] = {};
controllers.forEach((crl) => {
    koa.prototype.controller[crl.name] = crl.module;
});


// Router.get('/', (ctx, next) => {
//     ctx.body = 'hello';
// })

const app = new koa();

app.use(setRouters(app));//引入router中间件

app.listen(3000, '127.0.0.1', () => {
    console.log('服务器启动');
});
