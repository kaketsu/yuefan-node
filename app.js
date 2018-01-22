const koa = require('koa');

const setRouters = require('./routerLoader');//引入router中间件

const app = new koa();


// Router.get('/', (ctx, next) => {
//     ctx.body = 'hello';
// })

app.use(setRouters());//引入router中间件

app.listen(3000, '127.0.0.1', () => {
    console.log('服务器启动');
})
