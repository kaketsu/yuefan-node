const mongoose = require('mongoose');
const MongoObjectID = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    _id: ObjectId,
    uid: { type: Number, unique: true, index: true },
    name: String,
    age: Number,
    address: String,
    updatedTime: Date,
    createdTime: { type: Date, default: Date.now },
}, {
    versionKey: false
});

const User = mongoose.model('User', UserSchema, 'User');

UserSchema.pre('save', function(next) {
    const doc = this;
    const currentDate = new Date;
    this.updatedTime = currentDate.now;
    User.findOneAndUpdate({uid: doc.uid}, {new: false, upsert: false})
        .then(function(user) {
            if (user) {
                // toDo
            }
            next();
        })
        .catch((error) => {
            throw error;
        });
});



const getAllUsers = async () => {
    let res = null;
    await User.find({}, (err, doc) => {
        res = doc;
    });
    return res;
};

const getUserByName = async (name) => {
    let res = null;
    await User.find({name}, (err, doc)=> {
        res = doc;
    });
    return res;
};

const saveUser = async (post) => {
    const newUser = new User({
        _id: new MongoObjectID(),
        ...post
    });
    return newUser.save();
};

const updateUser = async (name, post) => {
    let res = null;
    await User.update({name: name}, post, (err, doc) => {
        res = doc;
    });
    return res;
};

const deleteUser = async (name) => {
    let res = null;
    await User.deleteOne({name: name}, (err, doc) => {
        res = doc;
    });
    return res;
};

module.exports = {
    getAllUsers,
    getUserByName,
    saveUser,
    updateUser,
    deleteUser
};