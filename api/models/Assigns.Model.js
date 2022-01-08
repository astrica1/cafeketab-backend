const sql = require('mssql');

const Assign = {
    id: sql.Int,
    bookID: sql.Int,
    postID: sql.Int
};

module.exports = Assign;