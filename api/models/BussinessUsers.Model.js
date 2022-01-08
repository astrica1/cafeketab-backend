const sql = require('mssql');

const BussinessUser = {
    id: sql.Int,
    brandName: sql.NVarChar(75),
    userName: sql.VarChar(50),
    hashedPassword: sql.Char(50),
    mailAddress: sql.VarChar(50),
    phoneNumber: sql.Char(10),
    providenceName: sql.NVarChar(50),
    cityName: sql.NVarChar(50),
    address: sql.NVarChar(200),
    postalCode: sql.VarChar(10),
    picture: sql.NVarChar(200),
    registrationDate: sql.Date
};

module.exports = BussinessUser;