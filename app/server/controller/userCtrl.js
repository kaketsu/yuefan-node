const userService = require('../service/userService');

const getAllUser = async (ctx) => {
    const allUsers =  await userService.getAllUser();
    ctx.body = allUsers;
};

const getUserById = async (ctx) => {
    const user = await userService.getUserbyId(ctx.request.body);
    ctx.body = user;
};

module.exports = {
    getAllUser,
    getUserById
};
