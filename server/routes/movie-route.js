const express = require('express');

const MovieCtrl = require('../controller/movie-ctrl');

const router = express.Router();

router.post('/movie', MovieCtrl.createMovie);
router.get('/movies', MovieCtrl.getMovies);
router.delete('/movie/:id', MovieCtrl.deleteMovie);

module.exports = router;