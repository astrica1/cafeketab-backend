module.exports = (app) => {
    let posts = require('../controllers/PostsController');
    app.route('/posts/:postID')
        .get(posts.get_post_info)
        .put(posts.edit_post)
        .delete(posts.remove_post);

    app.route('/posts')
        .get(posts.get_all_users_posts);

    app.route('/users/:userName/posts')
        .get(posts.get_user_posts_count)
        .post(posts.create_post);

    app.route('/users/:userName/posts/list')
        .get(posts.get_user_posts);
};