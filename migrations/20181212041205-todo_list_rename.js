'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.changeColumn(
      'todo_lists',
      'description',
      {
        type: Sequelize.ARRAY(Sequelize.JSON) + 'USING CAST("description" as ' + Sequelize.ARRAY(Sequelize.JSON) + ')'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    return queryInterface.changeColumn(
      'todo_lists',
      'title',
      {
        type: Sequelize.STRING,
      }
    )
  }
};
