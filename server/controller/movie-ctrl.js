const Movie = require("../models/movie-model");

createMovie = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Please enter movie name"
    });
  }

  const movie = new Movie(body);

  if (!movie) {
    return res.status(400).json({
      success: false,
      error: err
    });
  }

  movie
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: movie._id,
        message: "Movie created!"
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: "Movie not created!"
      });
    });
};

getMovies = async (req, res) => {
  await Movie.find({}, (err, movies) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!movies.length) {
      return res.status(404).json({ success: false, error: "Movie not found" });
    }

    return res.status(200).json({ success: true, data: movies });
  }).catch(err => console.log(err));
};

deleteMovie = async(req, res) => {

  await Movie.findByIdAndDelete({_id: req.params.id}, (err, movie) => {
    if(err) {
      return res.status(400).json({success: false, error: err});
    }

    if(!movie) {
      return res.status(404).json({success: false, error: `Movie not found`});
    }

    return res.status(200).json({success: true, data: movie});
  }).catch(err => console.log(err));
}

module.exports = { createMovie, getMovies, deleteMovie };
