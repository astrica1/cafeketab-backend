module.exports = (app) => {
    let comments = require('../controllers/CommentsController');
    app.route('/posts/:postID/comments')
        .get(comments.get_post_comments_count);

    app.route('/posts/:postID/comments/list')
        .get(comments.get_post_comments);

    app.route('/users/:userName/comments')
        .get(comments.posts_you_have_commented)
        .post(comments.send_comment_for_post)
        .delete(comments.delete_all_your_comments_on_post)
        .put(comments.get_user_comments_count);

    app.route('/users/:userName/comment')
        .get(comments.get_comment_details)
        .post(comments.reply_to_comment)
        .put(comments.edit_comment)
        .delete(comments.delete_comment);
};