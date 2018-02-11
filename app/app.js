const koa = require("koa");
const router = require('koa-router');
const logger = require('koa-logger');
const userController = require('./db/userController');
const config = require('./config');
const mongoose = require('mongoose');

const app = new koa();
const koaRouter = new router()


app.use(koaRouter.routes());
app.use(logger());

koaRouter.get("/users", async(ctx) => {
    const users = await userController.getAllUsers();
    ctx.body = users;
})

mongoose.connect(config.MongoConnection);
mongoose.connection.on('error', console.error);

app.listen(3000);