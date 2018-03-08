const koa = require('koa');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
// const koaRouter = require('./api/api');
// const mongoConnect = require('./db/mongooseConnect');
// const mysqlConnect = require('./db/mysqlConnect');

const koaRouter = require('./api/router');

const app = new koa();
app.use(logger());
app.use(bodyParser());
app.use(koaRouter.routes());

app.use(async (ctx) => {
    console.log(ctx);
    console.log(ctx.request);
});

app.listen(3000);