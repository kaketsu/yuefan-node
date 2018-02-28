const koa = require('koa');
const router = require('koa-router');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');

const userController = require('./db/userCtrl');
const groupController = require('./db/groupCtrl');

const config = require('./config');
const mongoose = require('mongoose');

const app = new koa();
const koaRouter = new router();

app.use(logger());
app.use(bodyParser());
app.use(koaRouter.routes());

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

mongoose.connect(config.MongoConnection);
mongoose.connection.on('error', () => {});

app.listen(3000);