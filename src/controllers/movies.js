const { moviesGetService } = require("../services/movies/get");
const { moviesGetSingleService } = require("../services/movies/getSingle");
const { moviesPostService } = require("../services/movies/post");
const { moviesPutService } = require("../services/movies/put");

exports.getMoviesController = (req, res) => {
  moviesGetService()
    .then((response) => {
      if (!response.status) {
        throw new Error(response.message);
      }
      res.status(200).json({
        status: true,
        response: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(401).json({
        status: false,
        message: err.message,
      });
    });
};

exports.getSingleMoviesController = (req, res) => {
    moviesGetSingleService(req.params)
      .then((response) => {
        if (!response.status) {
          throw new Error(response.message);
        }
        res.status(200).json({
          status: true,
          response: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(401).json({
          status: false,
          message: err.message,
        });
      });
};

exports.postMoviesController = (req, res) => {
    moviesPostService(req.body)
      .then((response) => {
        if (!response.status) {
          throw new Error(response.message);
        }
        res.status(200).json({
          status: true,
          response: response.message,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(401).json({
          status: false,
          message: err.message,
        });
      });
};

exports.putMoviesController = (req, res) => {
    moviesPutService(req.body)
      .then((response) => {
        if (!response.status) {
          throw new Error(response.message);
        }
        res.status(200).json({
          status: true,
          response: response.message,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(401).json({
          status: false,
          message: err.message,
        });
      });
};