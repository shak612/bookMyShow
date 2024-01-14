const Sequalize = require('sequelize');

const sequalize = new Sequalize(
		'bookmyshow', 
		'root',
		'Shakir9818!!', {
			dialect: 'mysql',
			host: 'localhost',
			pool: {
    			max: 5,
    			min: 0,
    			idle: 10000
  			}
		});

// Check the connection to database - calling authenticate method

const connectToMysql = async ()=>{
	try{
		await sequalize.authenticate();
		console.log("Successfully connected to the database.");
	}
	catch(error){
		console.log(error);
	}
}


module.exports = {sequalize, connectToMysql}