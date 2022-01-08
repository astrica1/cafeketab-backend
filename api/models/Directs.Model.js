const sql = require('mssql');

const Direct = {
    id: sql.Int,
    senderID: sql.Int,
    recieverID: sql.Int,
    content: sql.NVarChar(sql.MAX),
    sentDate: sql.Date,
    sentTime: sql.Time
};

module.exports = Direct;