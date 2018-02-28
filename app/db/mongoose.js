const mongoose = require('mongoose');
const config = require('../config');

const mongoInit = () => {
    mongoose.connect(config.MongoConnection);
    mongoose.connection.on('error', () => {});
}

module.exports = {
    mongoInit
};
