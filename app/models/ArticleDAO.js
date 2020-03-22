function ArticleDAO(connection) {
	this._connection = connection;
}

ArticleDAO.prototype.getNews = function (callback) {
	this._connection.query('select * from news', callback);
}

ArticleDAO.prototype.getArticle = function (callback) {
	this._connection.query('select * from news where id = 1', callback);
}

ArticleDAO.prototype.addArticle = function (article, callback) {
	this._connection.query('insert into news set ?', article, callback);
}

module.exports = function () {
	return ArticleDAO;
}