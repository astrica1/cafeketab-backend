const { poolPromise } = require('../database/DB');
const user = require('../models/Users.Model');
const post = require('../models/Posts.Model');
const like = require('../models/Likes.Model');
const paramValidator = require('../middleware/paramValidator');

exports.get_post_likes_count = async(req, res) => {
    let date = new Date();
    post.id = req.params.postID;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tget_post_likes_count(' + post.id + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('postID', post.id)
            .execute('sp_get_likes_count_of_post')
            .then((likesSet) => {
                res.json(likesSet.recordset[0]);
            }).catch((err) => {
                console.log(err);
            });
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

exports.get_post_likes = async(req, res) => {
    let date = new Date();
    post.id = req.params.postID;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tget_post_likes(' + post.id + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('postID', post.id)
            .execute('sp_get_likers_info')
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

exports.posts_you_have_liked = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tposts_you_have_liked(' + user.userName + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('userName', user.userName)
            .execute('sp_posts_you_have_liked')
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

exports.like_post = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    post.id = paramValidator.undefined2null(req.query.postID);
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tlike_post(' + user.userName + ', ' + post.id + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('userName', user.userName)
            .input('postID', post.id)
            .execute('sp_like_post_by_username')
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

exports.unlike_post = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    post.id = paramValidator.undefined2null(req.query.postID);
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tunlike_post(' + user.userName + ', ' + post.id + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('userName', user.userName)
            .input('postID', post.id)
            .execute('sp_unlike_post_by_username')
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

exports.like_checker = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    post.id = paramValidator.undefined2null(req.query.postID);
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tlike_checker(' + user.userName + ', ' + post.id + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('username', user.userName)
            .input('postID', post.id)
            .execute('sp_like_checker_by_username')
            .then((followSet) => {
                res.json(followSet.recordset[0]);
            }).catch((err) => {
                console.log(err);
            });
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

exports.get_user_likes_count = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tget_user_likes_count(' + user.userName + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('username', user.userName)
            .execute('sp_return_user_likes_count')
            .then((likesSet) => {
                res.json(likesSet.recordset[0]);
            }).catch((err) => {
                console.log(err);
            });
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};