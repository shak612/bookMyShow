const { showsGetService } = require("../services/shows/get");
const { showsGetSingleService } = require("../services/shows/getSingle");
const { showsPostService } = require("../services/shows/post");
const { showsPutService } = require("../services/shows/put");

exports.getShowsController = (req, res) => {
  showsGetService(req.params, req.query)
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

exports.getSingleShowsController = (req, res) => {
    showsGetSingleService(req.params, req.query)
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

exports.postShowsController = (req, res) => {
    showsPostService(req.body)
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

exports.putShowsController = (req, res) => {
    showsPutService(req.body)
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