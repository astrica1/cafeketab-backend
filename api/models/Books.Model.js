const sql = require('mssql');

const Book = {
    id: sql.Int,
    isbn: sql.VARChar(13),
    bookName: sql.NVarChar(50),
    writersName: sql.NVarChar(200),
    translatorsName: sql.NVarChar(200),
    publisherName: sql.NVarChar(50),
    description: sql.NVarChar(sql.MAX),
    picture: sql.NVarChar(200),
    adderID: sql.Int
};

module.exports = Book;