const Sequelize = require('sequelize');
const sequelize = new Sequelize('chatbotia','admin','1nort818',{
  dialect: 'pg',
  host: 'localhost',
  port: 3000,
})

module.exports = sequelize;