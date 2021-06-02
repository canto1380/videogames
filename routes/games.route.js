const express = require('express');
const router = express.Router();

const { list, read, create, remove, videogameById, photo } = require('../controllers/game.controller');
 
router.get('/videogames', list);
router.post('/create', create)
router.get('/photo/:videogameId', photo)
router.get('/:videogameId', read)
router.delete('/:videogameId', remove)
router.param("videogameId", videogameById);

module.exports = router;