/* eslint-disable no-undef */
const dotenv = require('dotenv');
const sequelize = require('sequelize');
dotenv.config();
const customSeq = new sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
      dialect: process.env.DB_DIALECT,
      host: process.env.DB_HOST,
    },
);

module.exports = customSeq;