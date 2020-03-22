module.exports = function () {
	
	this.getNews = function (connection, callback) {
		connection.query('select * from news', callback);
	}

	this.getArticle = function (connection, callback) {
		connection.query('select * from news where id = 1', callback);
	}

	return this;
}