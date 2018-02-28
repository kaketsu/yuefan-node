const router = require('koa-router');
const userController = require('../controller/userCtrl');
const groupController = require('../controller/groupCtrl');
const koaRouter = new router();

koaRouter.get('/user', async (ctx) => {
    const users = await userController.getAllUsers();
    ctx.body = users;
});

koaRouter.get('/user/:userName', async (ctx) => {
    const user = await userController.getUserByName(ctx.params.userName);
    ctx.body = user;
});

koaRouter.post('/user', async (ctx)=> {
    const newUser = await userController.saveUser(ctx.request.body);
    ctx.body = newUser;
});

koaRouter.put('/user/:userName', async (ctx) => {
    const userName = ctx.params.userName;
    const user = await userController.updateUser(userName, ctx.request.body);
    ctx.body = user;
});

koaRouter.delete('/user/:userName', async (ctx) => {
    const userName = ctx.params.userName;
    ctx.body = await userController.deleteUser(userName);
});


koaRouter.post('/group', async (ctx)=> {
    const newGroup = await groupController.saveGroup(ctx.request.body);
    ctx.body = newGroup;
});
module.exports = koaRouter;
