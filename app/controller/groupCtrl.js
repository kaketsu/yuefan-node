const mongoose = require('mongoose');
const MongoObjectID = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const GroupSchema = new Schema({
    _id: ObjectId,
    gId: Number,
    name: String,
    location: String,
    leader: { type: Number, ref: 'User', required: true },
    dinnerTime: Date,
    createdBy: String,
    createdTime: Date,
    updatedTime: Date
}, {
    versionKey: false
});

const Group = mongoose.model('Group', GroupSchema, 'Group');

GroupSchema.pre('save', function(next) {
    const doc = this;
    const currentDate = new Date;
    this.updatedTime = currentDate.now;
    Group.findOneAndUpdate({gId: doc.gId}, {$inc: { gId: 1} }, function(error, group) {
        console.log(group);
        if (error) {
            return next(error);
        }
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