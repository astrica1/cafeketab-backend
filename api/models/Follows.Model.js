const sql = require('mssql');

const Follow = {
    id: sql.Int,
    followingID: sql.Int,
    followerID: sql.Int,
    followingUserName: sql.VarChar(50),
    followerUserName: sql.VarChar(50)
};

module.exports = Follow;