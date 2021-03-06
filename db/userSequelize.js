// User Sequelize Model
const Sequelize = require('sequelize');
const sequelize = require('./sequelize');
class User extends Sequelize.Model {}

User.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  role: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: new Date(),
    field: 'created_at',
  }
}, {
  indexes: [{
    unique: true,
    fields: ['user']
  }],
  tableName: 'user',
  sequelize,
});

module.exports = User;
