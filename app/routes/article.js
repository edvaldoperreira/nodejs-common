module.exports = function (app) {

	app.get('/article', function (req, res) {
		const connection = app.config.dbConnection();
		const dao = new app.app.models.ArticleDAO(connection);

		dao.getArticle(function (error, result) {
			res.render('article/article', { article: result });
		});
	});

	app.post('/article', function (req, res) {
		const article = req.body;

		const connection = app.config.dbConnection();
		const dao = new app.app.models.ArticleDAO(connection);

		dao.addArticle(article, function (error, result) {
			res.redirect('/');
		});
	});

	app.get('/article/new', function (req, res) {
		res.render('article/form-article');
	});
};
