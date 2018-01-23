module.exports = {
    async getUser(ctx, services) {
        await services.userService.storeInfo();
        ctx.body = 'getUser';
    },
    async getUserInfo(ctx) {
        ctx.body = 'getUserInfo';
    }
};
