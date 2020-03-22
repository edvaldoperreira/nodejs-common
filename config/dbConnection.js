const mysql = require('mysql');
const connectionMySql = function () {
	console.log('MySql connection has established');
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '1234',
		database: 'nodejs'
	});
}

module.exports = function() {
	console.log('Autoload dbConnection has executed');
	return connectionMySql;
}

