module.exports = (app) => {
    let likes = require('../controllers/LikesController');
    app.route('/posts/:postID/likes')
        .get(likes.get_post_likes_count);

    app.route('/posts/:postID/likes/list')
        .get(likes.get_post_likes);

    app.route('/users/:userName/like')
        .get(likes.like_checker)
        .post(likes.like_post)
        .delete(likes.unlike_post)
        .put(likes.get_user_likes_count);

    app.route('/users/:userName/like/list')
        .get(likes.posts_you_have_liked);

    app.route('/users/:userName/unlike')
        .post(likes.unlike_post);
};