module.exports = {
    async getUser(ctx) {
        ctx.body = 'getUser';
    },
    async getUserInfo() {
        ctx.body = 'getUserInfo';
    }
};
