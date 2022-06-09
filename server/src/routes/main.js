const router = require('express').Router();
const userController = require('../controllers/user')
const songController = require('../controllers/song')
const authPolicies = require('../policies/auth');

router.post('/register', authPolicies.registerMiddleWare, userController.postRegister);
router.post('/login', userController.login);
router.get('/songs', songController.filterSongs)
router.get('/songs/all', songController.allSongs);
router.post('/songs/create', songController.createSong);
router.post('/songs/detail', songController.songDetail);
router.put('/songs/edit', songController.songEdit);

module.exports = router;