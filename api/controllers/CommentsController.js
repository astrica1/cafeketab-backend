const { poolPromise } = require('../database/DB');
const user = require('../models/Users.Model');
const post = require('../models/Posts.Model');
const comment = require('../models/Comments.Model');
const paramValidator = require('../middleware/paramValidator');

exports.get_post_comments_count = async(req, res) => {
    let date = new Date();
    post.id = req.params.postID;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tget_post_comments_count(' + post.id + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('postID', post.id)
            .execute('sp_get_commens_count_of_post')
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

exports.get_post_comments = async(req, res) => {
    let date = new Date();
    post.id = req.params.postID;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tget_post_comments(' + post.id + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('postID', post.id)
            .execute('sp_return_commens_of_post')
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

exports.posts_you_have_commented = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tposts_you_have_commented(' + user.userName + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('userName', user.userName)
            .execute('sp_return_all_user_comments')
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

exports.delete_all_your_comments_on_post = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tdelete_all_your_comments_on_post(' + user.userName + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('username', user.userName)
            .execute('sp_delete_all_user_comments')
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

exports.send_comment_for_post = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    post.id = paramValidator.undefined2null(req.query.postID);
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tsend_comment_for_post(' + user.userName + ', ' + post.id + ')');
    comment.postID = post.id;
    comment.content = paramValidator.undefined2null(req.query.content);
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('userName', user.userName)
            .input('postID', comment.postID)
            .input('content', comment.content)
            .execute('sp_commenting_on_post_by_username')
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

exports.get_comment_details = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    comment.id = paramValidator.undefined2null(req.query.commentID);
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tget_comment_details(' + comment.id + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('commentID', comment.id)
            .execute('sp_get_comment_detail')
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

exports.reply_to_comment = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    comment.id = paramValidator.undefined2null(req.query.commentID);
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\treply_to_comment(' + user.userName + ', ' + comment.id + ')');
    res.status(400).json({ message: 'Invalid' });
};

exports.edit_comment = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    comment.id = paramValidator.undefined2null(req.query.commentID);
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tedit_comment(' + comment.id + ')');
    res.status(400).json({ message: 'Invalid' });
};

exports.delete_comment = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    comment.id = paramValidator.undefined2null(req.query.commentID);
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tdelete_comment(' + comment.id + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('commentID', comment.id)
            .execute('sp_delete_comment')
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

exports.get_user_comments_count = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tget_user_comments_count(' + user.userName + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('username', user.userName)
            .execute('sp_return_user_comments_count')
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