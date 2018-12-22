'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    is_valid_email: DataTypes.BOOLEAN
  }, {
    underscored: true,
  });
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};