const koa = require('koa');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const appRouter = require('./routerLoader');

const app = new koa();
app.use(logger());
app.use(bodyParser());
app.use(appRouter.routes());

app.listen(3000);