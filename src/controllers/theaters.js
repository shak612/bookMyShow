const { theatersGetService } = require("../services/theaters/get");
const { theatersGetSingleService } = require("../services/theaters/getSingle");
const { theatersPostService } = require("../services/theaters/post");
const { theatersPutService } = require("../services/theaters/put");

exports.getTheatersController = (req, res) => {
  theatersGetService()
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

exports.getSingleTheatersController = (req, res) => {
    theatersGetSingleService(req.params)
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

exports.postTheatersController = (req, res) => {
    theatersPostService(req.body)
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

exports.putTheatersController = (req, res) => {
    theatersPutService(req.body)
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