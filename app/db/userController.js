const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const  ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    _id: ObjectId,
    uid: Number,
    name: String,
    description: String
})

const User = mongoose.model('User', UserSchema, 'User');

const getAllUsers = async ()  => {
    let res = null;
    await User.find({}, (err, doc) => {
        res = doc;
    });
    return res;
}

module.exports = {
    getAllUsers
}