'use strict';
module.exports = (sequelize, DataTypes) => {
  var TodoList = sequelize.define('TodoList', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    completed_at: DataTypes.DATE
  }, {
    underscored: true,
    tableName: 'todo_lists'
  });
  TodoList.associate = function(models) {
    // associations can be defined here
  };
  return TodoList;
};