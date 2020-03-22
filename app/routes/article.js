module.exports = function (app) {
	app.get('/article', function(req, res) {

		const connection = app.config.dbConnection();
		const newsModel = app.app.models.newsModel();

		newsModel.getArticle(connection, function(error, result) {
			if (error) {
				res.send(error);
			} else {
				res.render('article', {article: result});
			}});
	});
}
