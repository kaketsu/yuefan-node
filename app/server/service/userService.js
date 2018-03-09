const { query } = require('../../util/mysql-db');

const createUser = async (data) => {
    const _sql = `insert into user set uid=${data.uid},name='${data.name}';`;
    return query(_sql);
};

const getUserbyId = async (data) => {
    const _sql = `select * from user where uid = ${data.uid}`;
    return query(_sql);
};

const getAllUser = async () => {
    const _sql = `
        select * from user
    `;
    return query(_sql);
};

module.exports = {
    createUser,
    getUserbyId,
    getAllUser
};
