const mongoose = require('mongoose');
const MongoObjectID = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    _id: ObjectId,
    uid: { type: String, default: 600000 },
    name: String,
    age: Number,
    address: String
}, {
    versionKey: false
});

const User = mongoose.model('User', UserSchema, 'User');

UserSchema.pre('save', (next) => {
    const doc = this;
    console.log(doc);

    const currentDate = new Date;
    this.updated_at = currentDate.now;
    next();
    // User.findOneAndUpdate({uid: 600001}, {$inc: { seq: 1} }, {new: true, upsert: true}).then(function(user) {
    //     console.log('...count: '+JSON.stringify(user));
    //     doc.sort = user.seq;
    //     next();
    // })
    // .catch((error) => {
    //     console.error('counter error-> : '+error);
    //     throw error;
    // });
});



const getAllUsers = async ()  => {
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