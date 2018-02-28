const koa = require('koa');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const koaRouter = require('./api/api');
const mongoose = require('./db/mongoose');

const app = new koa();

app.use(logger());
app.use(bodyParser());
app.use(koaRouter.routes());
mongoose.mongoInit();

app.listen(3000);