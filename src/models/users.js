const sequalize = require('../configs/mysqldb').sequalize;
const DataTypes = require('sequelize');

const User = sequalize.define('users', {
	user_id: {
		type: DataTypes.BIGINT,
		autoIncrement: true,
    	primaryKey: true
	},
	username: {
		type: DataTypes.STRING(100)
	},
	phone: {
		type: DataTypes,
		allowNull: false
	},
	stock: {
		type: DataTypes.INTEGER,
		allowNull: false
	}
})

// Execute the sync command to run migrations 
// sequalize.sync()

module.exports = Product;