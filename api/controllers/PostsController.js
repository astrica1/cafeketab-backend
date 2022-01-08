const { poolPromise } = require('../database/DB');
const user = require('../models/Users.Model');
const post = require('../models/Posts.Model');
const paramValidator = require('../middleware/paramValidator');

exports.get_user_posts_count = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tget_user_posts_count(' + user.userName + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('senderUserName', user.userName)
            .execute('sp_get_users_posts_count_by_username')
            .then((postsSet) => {
                res.json(postsSet.recordset[0]);
            }).catch((err) => {
                console.log(err);
            });
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

exports.get_user_posts = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tget_user_posts(' + user.userName + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('senderUserName', user.userName)
            .execute('sp_get_users_posts_by_username')
            .then((postsSet) => {
                res.json(postsSet.recordset);
            }).catch((err) => {
                console.log(err);
            });
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

exports.create_post = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tcreate_post(' + user.userName + ')');
    post.senderUserName = user.userName;
    post.caption = paramValidator.undefined2null(req.query.caption);
    post.picture = paramValidator.undefined2null(req.query.picture);
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('senderUserName', post.senderUserName)
            .input('postCaption', post.caption)
            .input('postPicture', post.picture)
            .execute('sp_sending_post_by_username')
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

exports.get_post_info = async(req, res) => {
    let date = new Date();
    post.id = req.params.postID;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tget_post_info(' + post.id + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('postID', post.id)
            .execute('sp_get_post_by_post_id')
            .then((postsSet) => {
                res.json(postsSet.recordset[0]);
            }).catch((err) => {
                console.log(err);
            });
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

exports.edit_post = async(req, res) => {
    let date = new Date();
    post.id = req.params.postID;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tedit_post(' + post.id + ')');

    /********** Select Last Post Info **********/
    let selectQueryResult;
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('postID', post.id)
            .execute('sp_get_post_by_post_id')
            .then((postsSet) => {
                selectQueryResult = postsSet.recordset[0];
            }).catch((err) => {
                console.log(err);
            });
    } catch (err) {
        console.log(err.message);
        res.status(500);
        res.send(err.message);
    }

    /********** Assign selected values to schema **********/
    post.id = selectQueryResult.ID;
    post.caption = paramValidator.undefined2value(req.query.caption, selectQueryResult.Caption);
    post.picture = paramValidator.undefined2value(req.query.picture, selectQueryResult.Picture);

    /********** Update Database **********/
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('postID', post.id)
            .input('caption', post.caption)
            .input('picture', post.picture)
            .execute('sp_edit_post_by_post_id')
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

exports.remove_post = async(req, res) => {
    let date = new Date();
    post.id = req.params.postID;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tremove_post(' + post.id + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('postID', post.id)
            .execute('sp_delete_post_by_post_id')
            .then((postsSet) => {
                res.status(200).json({ status: 'Success' });
            }).catch((err) => {
                console.log(err);
            });
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

exports.get_all_users_posts = async(req, res) => {
    let date = new Date();
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tget_all_users_posts()');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .execute('sp_get_all_users_posts_with_user_info')
            .then((postsSet) => {
                res.json(postsSet.recordset);
            }).catch((err) => {
                console.log(err);
            });
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};