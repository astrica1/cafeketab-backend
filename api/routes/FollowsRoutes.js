module.exports = (app) => {
    let follow = require('../controllers/FollowsController');
    app.route('/users/:userName/followings')
        .get(follow.followings_count);
        
    app.route('/users/:userName/followings/posts')
        .get(follow.get_followings_posts);

    app.route('/users/:userName/follow')
        .get(follow.follow_checker)
        .post(follow.follow_user)
        .delete(follow.unfollow_user);

    app.route('/users/:userName/unfollow')
        .post(follow.unfollow_user);

    app.route('/users/:userName/followings/list')
        .get(follow.followings_list);

    app.route('/users/:userName/followers')
        .get(follow.followers_count);

    app.route('/users/:userName/followers/list')
        .get(follow.followers_list);
};