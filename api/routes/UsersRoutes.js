module.exports = (app) => {
    let users = require('../controllers/UsersController');
    app.route('/users')
        .get(users.list_all_users)
        .post(users.create_user);

    app.route('/users/:userName')
        .get(users.get_user_info)
        .post(users.get_user_password)
        .put(users.update_user_info)
        .delete(users.delete_user);
};