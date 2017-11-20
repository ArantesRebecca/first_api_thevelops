module.exports = function(app) {
  var userApi = require('../controllers/apiControllers.js');

  app.route('/users')
    .get(userApi.all_users)
    .post(userApi.create_user);


  app.route('/users/:userId')
    .get(userApi.find_user)
    .put(userApi.edit_user)
    .delete(userApi.delete_user);
};
