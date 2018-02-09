const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/yuefan";

const mongoConnect = async () => {
    mongoose.connect(url, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log("success");
    })
    
}

module.exports = {
    mongoConnect
}