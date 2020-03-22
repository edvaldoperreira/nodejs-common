module.exports = function (app) {
	app.get('/article', function(req, res) {

		const connection = app.config.dbConnection();
		const dao = new app.app.models.ArticleDAO(connection);

		dao.getArticle(function(error, result) {
			if (error) {
				res.send(error);
			} else {
				res.render('article', {article: result});
			}});
	});
}
