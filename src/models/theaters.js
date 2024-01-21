const sequalize = require('../configs/mysqldb').sequalize;
const DataTypes = require('sequelize');

const Theater = sequalize.define('theaters', {
	theater_id: {
	  type: DataTypes.INTEGER,
	  primaryKey: true,
	  autoIncrement: true,
      indexes: [{ unique: true, fields: ['theater_id'] }]
	},
	theater_name: {
	  type: DataTypes.STRING,
	  allowNull: false,
	},
	location: {
	  type: DataTypes.STRING,
	  allowNull: false
	}
  }, {
	timestamps: true,
  });

// Execute the sync command to run migrations 
sequalize
  .sync({ force: false })
  .then(() => console.log("Synced Theater table"))
  .catch((error) => console.log("Error in Theater table", error));

module.exports = Theater;