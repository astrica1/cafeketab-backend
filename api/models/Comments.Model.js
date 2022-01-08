const sql = require('mssql');

const Comment = {
    id: sql.Int,
    userID: sql.Int,
    postID: sql.Int,
    content: sql.NVarChar(sql.MAX),
    postingDate: sql.Date,
    postingTime: sql.Time
};

module.exports = Comment;