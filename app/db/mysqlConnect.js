const mysql      = require('mysql');
const config = require('./config');
const connection = mysql.createPool({
    host     : config.database.HOST,
    user     : config.database.USERNAME,
    password : config.database.PASSWORD,
    database : config.database.DATABASE
});

const query = function(sql, values) {
    return new Promise((resolve, reject) => {
        connection.getConnection(function(err, connection) {
            if (err) {
                resolve(err);
            } else {
                connection.query(sql, values, ( err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                    connection.release();
                });
            }
        });
    });
};

const createUser = function(data) {
    // console.log(data);
    // const entries = data.entries();
    // const str = [];
    // entries.forEach((item) => {
    //     str.push(item[0]=item[1]);
    // });
    
    const _sql = `insert into user set uid=${data.uid},name='${data.name}';`;
    return query(_sql);
}
const getAllUsers = function () {
    const _sql = `
        SELECT * FROM User
    `;
    return query(_sql);
}
module.exports = {
    getAllUsers,
    createUser
};

