module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.TEXT,
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};

'use strict';
const Sequelize = require('sequelize');
const moment = require('moment');

module.exports = (sequelize) => {
  class user extends Sequelize.Model {}
 user.init({
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.TEXT,
}}, { sequelize });
user.associate = function(models) {
  // associations can be defined here
};
return user;
};



