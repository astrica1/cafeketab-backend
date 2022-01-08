const { poolPromise } = require('../database/DB');
const user = require('../models/Users.Model');
const follow = require('../models/Follows.Model');
const paramValidator = require('../middleware/paramValidator');

exports.followings_count = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tfollowings_count(' + user.userName + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('userName', user.userName)
            .execute('sp_return_users_following_count_username_by_username')
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

exports.followings_list = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tfollowings_list(' + user.userName + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('userName', user.userName)
            .execute('sp_return_users_following_info_by_username')
            .then((followSet) => {
                res.json(followSet.recordset);
            }).catch((err) => {
                console.log(err);
            });
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

exports.followers_count = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tfollowers_count(' + user.userName + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('userName', user.userName)
            .execute('sp_return_users_follower_count_username_by_username')
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

exports.follow_checker = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    follow.followerUserName = user.userName;
    follow.followingUserName = paramValidator.undefined2null(req.query.userName);
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tfollow_checker(' + follow.followerUserName + ', ' + follow.followingUserName + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('followerUsername', follow.followerUserName)
            .input('followingUsername', follow.followingUserName)
            .execute('sp_follow_checker_by_username')
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

exports.followers_list = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tfollowers_list(' + user.userName + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('userName', user.userName)
            .execute('sp_return_users_follower_info_by_username')
            .then((followSet) => {
                res.json(followSet.recordset);
            }).catch((err) => {
                console.log(err);
            });
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

exports.follow_user = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    follow.followerUserName = user.userName;
    follow.followingUserName = req.query.userName;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tfollow_user(' + follow.followerUserName + ', ' + follow.followingUserName + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('followerUserName', follow.followerUserName)
            .input('followingUserName', follow.followingUserName)
            .execute('sp_follow_user_by_userName')
            .then((followSet) => {
                res.status(200).json({ status: 'Success' });
            }).catch((err) => {
                console.log(err);
            });
    } catch (err) {
        res.status(400).json({ message: 'Invalid' });
        res.send(err.message);
    }
};

exports.unfollow_user = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    follow.followerUserName = user.userName;
    follow.followingUserName = req.query.userName;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tunfollow_user(' + follow.followerUserName + ', ' + follow.followingUserName + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('followerUserName', follow.followerUserName)
            .input('followingUserName', follow.followingUserName)
            .execute('sp_unfollow_user_by_userName')
            .then((followSet) => {
                res.status(200).json({ status: 'Success' });
            }).catch((err) => {
                console.log(err);
            });
    } catch (err) {
        res.status(400).json({ message: 'Invalid' });
        res.send(err.message);
    }
};

exports.get_followings_posts = async(req, res) => {
    let date = new Date();
    user.userName = req.params.userName;
    console.log(date.toLocaleString() + '\t:\tclient[' + req.connection.remoteAddress + ']\t->\tget_followings_posts(' + user.userName + ')');
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('username', user.userName)
            .execute('sp_get_followings_posts_by_username')
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