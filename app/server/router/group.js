const getAllGroup = (ctx) => {
    ctx.body = 'All Group';
};

const getGroupById = (ctx) => {
    ctx.body = 'This Group';
};

module.exports = {
    'get /group': getAllGroup,
    'post /group': getGroupById
};