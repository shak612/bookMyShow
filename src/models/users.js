const sequalize = require('../configs/mysqldb').sequalize;
const DataTypes = require('sequelize');

const User = sequalize.define('users', {
	user_id: {
	  type: DataTypes.INTEGER,
	  primaryKey: true,
	  autoIncrement: true,
	  indexes: [{ unique: true, fields: ['user_id'] }]
	},
	username: {
	  type: DataTypes.STRING,
	  allowNull: false,
	},
	email: {
	  type: DataTypes.STRING,
	  allowNull: false,
	  unique: true,
	},
	phone: {
	  type: DataTypes.STRING,
	  allowNull: false,
	  unique: true,
	},
  }, {
	timestamps: true,
  });

// Execute the sync command to run migrations 
sequalize
  .sync({ force: false })
  .then(() => console.log("Synced Show table"))
  .catch((error) => console.log("Error in Show table", error));

module.exports = User;