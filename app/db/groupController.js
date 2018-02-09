const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    name: String,
    location: String,
    leader: String,
    dinnerTime: Date,
    createdBy: String,
    createdTime: Date
})

const Group = mongoose.model('Group', GroupSchema);

module.exports = {
    createGroup: Group
}