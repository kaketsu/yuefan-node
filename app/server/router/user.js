const userCtrl = require('../controller/userCtrl');

module.exports = {
    'get /user': userCtrl.getAllUser,
    'post /user': userCtrl.getUserById
};