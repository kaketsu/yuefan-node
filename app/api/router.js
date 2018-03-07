const mysql = require('../db/mysqlConnect');
const router = require('koa-router');
const koaRouter = new router();

koaRouter.get('/user', async (ctx) => {
    const users = await mysql.getAllUsers()
    ctx.body = users;
});

koaRouter.post('/user', async (ctx)=> {
    const newUser = await mysql.createUser(ctx.request.body);
    ctx.body = newUser;
});


module.exports = koaRouter;