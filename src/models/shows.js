const sequalize = require('../configs/mysqldb').sequalize;
const DataTypes = require('sequelize');
const Movie = require('./movies');
const Theater = require('./theaters');

const Show = sequalize.define('shows', {
    show_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      indexes: [{ unique: true, fields: ['show_id'] }]
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: true,
  });
  
  // Associations for foreign keys
  Show.belongsTo(Movie, { foreignKey: 'movie_id' });
  Show.belongsTo(Theater, { foreignKey: 'theater_id' });

// Execute the sync command to run migrations 
// sequalize.sync()

module.exports = Show;