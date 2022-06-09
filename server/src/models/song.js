const sequelize = require('sequelize');
module.exports = require('./database').define('song', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
      type: sequelize.STRING,
      allowNull: false,
    },
    artist: {
      type: sequelize.STRING,
      allowNull: true,
    },
    genre: {
      type: sequelize.STRING,
      allowNull: true,
    },
    album: {
      type: sequelize.STRING,
      allowNull: true,
    },
    albumImageUrl: {
      type: sequelize.STRING,
      allowNull: true,
    },
    youtubeId: {
      type: sequelize.STRING,
      allowNull: false,
    },
    lyrics: {
      type: sequelize.STRING,
      allowNull: true,
    },
    tab: {
      type: sequelize.STRING,
      allowNull: true,
    },
})