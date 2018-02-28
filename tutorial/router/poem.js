const mapRouter = require('../routerLoader').mapRouter;

const sing = async (ctx, next) => {
    ctx.body = 'sing a poem';
};

module.exports = {
    'get /sing': sing
};
