/* eslint-disable no-undef */
const SongModel = require('../models/song')
const Op = require('sequelize').Op;

exports.allSongs = async (req, res) => {
  SongModel.findAll().then((data)=>{
    res.status(200).send(data);
  }).catch(err=>{
    res.status(404).send();
    console.log(err)
  })
}

exports.filterSongs = async (req, res) => {
  const search = req.query.search;
  await SongModel.findAll({
    where : {
      [Op.or]: [
        {title: {[Op.like]: `%${search}%`}},
        {artist: {[Op.like]: `%${search}%`}},
        {genre: {[Op.like]: `%${search}%`}},
        {album: {[Op.like]: `%${search}%`}},
      ]
    }
  }).then((data)=>{
    res.status(200).send(data);
  }).catch(err=>{
    res.status(404).send();
    console.log(err)
  })
}

exports.songDetail = async (req, res) => {  
  SongModel.findByPk(req.body.id).then(data=>{
    res.status(200).send(data)
  }
    ).catch(err=>res.status(404).send(err))
}

exports.songEdit = async (req, res) => {
  await SongModel.upsert(req.body).then(()=>res.status(200).send())
  .catch((err)=>{
    console.log(err);
    res.status(404).send();
  })
}

exports.createSong = async (req, res) => {
  const {title, artist, genre, album, albumImageUrl, youtubeId, lyrics, tab} = req.body;
  SongModel.create(
    {title, artist, genre, album, albumImageUrl, youtubeId, lyrics, tab}
    ).then(()=>{
    res.status(200).send('song created.');
  }).catch((err)=>{
    res.status(404).send();
    console.log(err);
  })
  
}