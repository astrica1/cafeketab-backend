const sql = require('mssql');

const Post = {
    id: sql.Int,
    caption: sql.NVarChar(sql.MAX),
    picture: sql.NVarChar(200),
    senderID: sql.Int,
    senderUserName: sql.VarChar(50),
    postingDate: sql.Date,
    postingTime: sql.Time
};

module.exports = Post;