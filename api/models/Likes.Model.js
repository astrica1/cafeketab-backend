const sql = require('mssql');

const Like = {
    id: sql.Int,
    userID: sql.Int,
    postID: sql.Int
};

module.exports = Like;