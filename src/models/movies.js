const sequalize = require('../configs/mysqldb').sequalize;
const DataTypes = require('sequelize');

const Movie = sequalize.define('movies', {
	movie_id: {
	  type: DataTypes.INTEGER,
	  primaryKey: true,
	  autoIncrement: true,
      indexes: [{ unique: true, fields: ['movie_id'] }]
	},
	movie_name: {
	  type: DataTypes.STRING,
	  allowNull: false,
	},
	genre: {
	  type: DataTypes.STRING,
	  allowNull: false
	}
  }, {
	timestamps: true,
  });

// Execute the sync command to run migrations 
// sequalize.sync()

module.exports = Movie;