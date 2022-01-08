const { poolPromise } = require('../database/DB');
const user = require('../models/Users.Model');
const paramValidator = require('../middleware/paramValidator');
const { json } = require('body-parser');

exports.list_all_users = async(req, res) => {
    let date = new Date();
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tlist_all_users()');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .query('SELECT * FROM TB_USERS')
            .then((userSet) => {
                res.json(userSet.recordset);
            }).catch((err) => {
                console.log(err);
            });
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

exports.create_user = async(req, res) => {
    let date = new Date();
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tcreate_user()');
    user.fullName = paramValidator.undefined2empty(req.query.fullName);
    user.userName = paramValidator.undefined2empty(req.query.userName);
    user.hashedPassword = paramValidator.undefined2empty(req.query.hashedPassword);
    user.mailAddress = paramValidator.undefined2empty(req.query.mailAddress);
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('fullName', user.fullName)
            .input('userName', user.userName)
            .input('hashedPassword', user.hashedPassword)
            .input('mailAddress', user.mailAddress)
            .execute('sp_register_users_simple_with_name')
            .then((recordSet) => {
                res.status(200).json({ status: 'Success' });
            }).catch((err) => {
                console.log(err);
            });
    } catch (err) {
        res.status(400).json({ message: 'Invalid' });
        res.send(err.message);
    }
};

exports.get_user_info = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tget_user_info(' + user.userName + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('userName', user.userName)
            .execute('sp_return_users_info_by_username')
            .then((userSet) => {
                res.json(userSet.recordset[0]);
            }).catch((err) => {
                console.log(err);
            });
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

exports.update_user_info = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tupdate_user_info(' + user.userName + ')');

    /********** Select Last User Info **********/
    let selectQueryResult;
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('userName', user.userName)
            .execute('sp_return_users_info_by_username')
            .then((userSet) => {
                selectQueryResult = userSet.recordset[0];
            }).catch((err) => {
                console.log(err);
            });
    } catch (err) {
        console.log(err.message);
        res.status(500);
        res.send(err.message);
    }

    /********** Assign selected values to schema **********/
    user.id = selectQueryResult.ID;
    user.nationalID = paramValidator.undefined2value(req.query.nationalID, selectQueryResult.NationalID);
    user.fullName = paramValidator.undefined2value(req.query.fullName, selectQueryResult.FullName);
    user.userName = paramValidator.undefined2value(req.query.userName, selectQueryResult.UserName);
    user.hashedPassword = paramValidator.undefined2value(req.query.hashedPassword, selectQueryResult.HashedPassword);
    user.mailAddress = paramValidator.undefined2value(req.query.mailAddress, selectQueryResult.MailAddress);
    user.gender = paramValidator.undefined2value(req.query.gender, selectQueryResult.Gender);
    user.birthDate = paramValidator.undefined2value(req.query.birthDate, selectQueryResult.BirthDate);
    user.phoneNumber = paramValidator.undefined2value(req.query.phoneNumber, selectQueryResult.PhoneNumber);
    user.providenceName = paramValidator.undefined2value(req.query.providenceName, selectQueryResult.ProvidenceName);
    user.cityName = paramValidator.undefined2value(req.query.cityName, selectQueryResult.CityName);
    user.address = paramValidator.undefined2value(req.query.address, selectQueryResult.Address);
    user.postalCode = paramValidator.undefined2value(req.query.postalCode, selectQueryResult.PostalCode);
    user.picture = paramValidator.undefined2value(req.query.picture, selectQueryResult.Picture);
    user.registrationDate = selectQueryResult.RegistrationDate;

    /********** Update Database **********/
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', user.id)
            .input('nationalID', user.nationalID)
            .input('fullName', user.fullName)
            .input('userName', user.userName)
            .input('hashedPassword', user.hashedPassword)
            .input('mailAddress', user.mailAddress)
            .input('gender', user.gender)
            .input('birthDate', user.birthDate)
            .input('phoneNumber', user.phoneNumber)
            .input('providenceName', user.providenceName)
            .input('cityName', user.cityName)
            .input('address', user.address)
            .input('postalCode', user.postalCode)
            .input('picture', user.picture)
            .execute('sp_update_users_info')
            .then((recordSet) => {
                res.status(200).json({ status: 'Success' });
            }).catch((err) => {
                console.log(err);
            });
    } catch (err) {
        res.status(400).json({ message: 'Invalid' });
        res.send(err.message);
    }
};

exports.delete_user = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tdelete_user(' + user.userName + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('username', user.userName)
            .execute('sp_delete_user')
            .then((recordSet) => {
                res.status(200).json({ status: 'Success' });
            }).catch((err) => {
                console.log(err);
            });
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

exports.get_user_password = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tget_user_password(' + user.userName + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('userName', user.userName)
            .execute('sp_return_users_hashed_password')
            .then((userSet) => {
                res.json(userSet.recordset[0]);
            }).catch((err) => {
                console.log(err);
            });
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};