const mongoose = require("mongoose");
const MongoObjectID = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const GroupSchema = new Schema({
    _id: ObjectId,
    gId: Number,
    name: String,
    location: String,
    leader: String,
    dinnerTime: Date,
    createdBy: String,
    createdTime: Date
}, {
    versionKey: false
});

const Group = mongoose.model('Group', GroupSchema, 'Group');
const saveGroup = async (post) => {
    const newGroup = new Group({
        _id: new MongoObjectID(),
        ...post
    });
    return newGroup.save();
}

module.exports = {
    saveGroup,
}