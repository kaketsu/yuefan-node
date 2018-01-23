module.exports = (app) => {  // 这里引入的是一个koa实例，实例中在原型链上有controller方法
    return {
        'get /': app.controller.userController.getUser,
        'get /getUserInfo': app.controller.userController.getUserInfo
    }
}