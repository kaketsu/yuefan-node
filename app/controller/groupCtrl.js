const mongoose = require('mongoose');
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
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    createdTime: Date
}, {
    versionKey: false
});

const Group = mongoose.model('Group', GroupSchema, 'Group');

GroupSchema.pre('save', function(next) {
    const doc = this;
    Group.findAndModify({_id: '5a93e35a26d9521fa8f2fa0'}, {$inc: { seq: 1} }, function(error, group)   {
        console.log(group)
        if (error) {
            return next(error);
        }
        doc.testvalue = group.seq;
        next();
    });
});
const saveGroup = async (post) => {
    const newGroup = new Group({
        _id: new MongoObjectID(),
        ...post
    });
    return newGroup.save();
};

module.exports = {
    saveGroup,
};