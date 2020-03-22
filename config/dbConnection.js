const mysql = require('mysql');
const connectionMySql = function () {
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '1234',
		database: 'nodejs'
	});
}

module.exports = function() {
	return connectionMySql;
}