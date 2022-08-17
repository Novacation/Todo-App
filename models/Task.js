const Sequelize = require('sequelize')
const database = require('../db')

const Task = database.define(
  'Task',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING
    }
  },
  {
    freezeTableName: true //Enforcing the table name to be equal to the model name
  }
)

module.exports = Task
