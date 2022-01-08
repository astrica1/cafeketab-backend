const sql = require('mssql');

const User = {
    id: sql.Int,
    nationalID: sql.Char(10),
    fullName: sql.NVarChar(75),
    userName: sql.VarChar(50),
    hashedPassword: sql.Char(50),
    mailAddress: sql.VarChar(50),
    gender: sql.Bit,
    birthDate: sql.Date,
    phoneNumber: sql.Char(10),
    providenceName: sql.NVarChar(50),
    cityName: sql.NVarChar(50),
    address: sql.NVarChar(200),
    postalCode: sql.VarChar(10),
    picture: sql.NVarChar(200),
    registrationDate: sql.Date
};

module.exports = User;