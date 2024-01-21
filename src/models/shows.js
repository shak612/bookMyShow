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
    dateAndTime: {
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
sequalize
  .sync({ force: false })
  .then(() => console.log("Synced Show table"))
  .catch((error) => console.log("Error in Show table", error));

module.exports = Show;