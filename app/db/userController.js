const mongoose = require("mongoose");

const UserSchema = {
    uid: Number,
    name: String,
    description: String
}
const User = mongoose.model("User", UserSchema);

const getAllUsers = async ()  => {
    const query = User.find({});
    let res = null;
    await query.exec((err, user) => {
        if(err) {
            res = {}
        }else {
            res = user
        }
    })
    return res;
}

module.exports = {
    getAllUsers
}