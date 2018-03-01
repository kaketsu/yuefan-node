const koa = require('koa');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const koaRouter = require('./api/api');
const mongoConnect = require('./db/mongooseConnect');

mongoConnect();
const app = new koa();
app.use(logger());
app.use(bodyParser());
app.use(koaRouter.routes());

app.listen(3000);