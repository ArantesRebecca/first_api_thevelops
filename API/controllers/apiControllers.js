
var mongoose = require('mongoose'),
  User = mongoose.model('User');

exports.all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      return  res.send(err);
      return  res.json({message:"Users found", user:user});
  });
};


exports.create_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      return res.send(err);
      return res.json({message:"User created successfully!", user:user});
  });
};


exports.find_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json({message:"User found: ", user:user});
  });
};


exports.edit_user = function(req, res) {
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json({message:"New user: ", user:user});
  });
};


exports.delete_user = function(req, res) {
  User.remove({_id: req.params.userId}, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'User deleted successfully!'});
  });
};
