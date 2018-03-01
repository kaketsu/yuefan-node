const mongoose = require('mongoose');
const config = require('../config');

const mongoConnect = () => {
    mongoose.connect(config.MongoConnection);
    mongoose.connection.on('error', () => {});
}

module.exports = mongoConnect;
