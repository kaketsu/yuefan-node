const koa = require("koa");
const router = require('koa-router');
const logger = require('koa-logger');
const dbConnect = require('./dbConnect');
const userController = require('./db/userController')

const app = new koa();
const koaRouter = new router()


koaRouter.get("/users", async(ctx) => {
    const users = userController.getAllUsers();
    console.log(users);
    ctx.body = users;
})

app.use(koaRouter.routes());
app.use(logger());

dbConnect.mongoConnect();

app.listen(3000);