function ArticleDAO(connection) {
	this._connection = connection;
}

ArticleDAO.prototype.getNews = function (callback) {
	this._connection.query('select * from news', callback);
}

ArticleDAO.prototype.getArticle = function (id, callback) {
	this._connection.query('select * from news where id = ?', id, callback);
}

ArticleDAO.prototype.addArticle = function (article, callback) {
	this._connection.query('insert into news set ?', article, callback);
}

module.exports = function () {
	return ArticleDAO;
}