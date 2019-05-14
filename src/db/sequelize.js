const Sequelize = require('sequelize');
const config = require('../../config/mysql');

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mariadb',
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;