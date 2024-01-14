const { usersGetService } = require("../services/users/get");
const { usersGetSingleService } = require("../services/users/getSingle");
const { usersPostService } = require("../services/users/post");
const { usersPutService } = require("../services/users/put");

exports.getUsersController = (req, res) => {
  usersGetService()
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

exports.getSingleUsersController = (req, res) => {
    usersGetSingleService(req.query)
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

exports.postUsersController = (req, res) => {
    usersPostService(req.body)
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

exports.putUsersController = (req, res) => {
    usersPutService(req.body)
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