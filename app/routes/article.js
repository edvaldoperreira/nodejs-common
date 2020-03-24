const { check, validationResult } = require('express-validator');

module.exports = function (app) {
	
	app.get('/', function (req, res) {
		app.app.controllers.article.list(app, req, res);
	});
	
	app.get('/article', function (req, res) {
		app.app.controllers.article.get(app, req, res);
	});
	
	app.post('/article', [ 
		check('title','title is required').notEmpty(),
		check('body', 'body is required').notEmpty(),
		check('resume', 'resume is required').notEmpty(),
		check('author', 'author is required').notEmpty(),
		check('category', 'category is required').notEmpty(),
		check('category', 'category needs to have minlength 3 and maxlength 30').isLength({min: 3, max: 30})
	],(req, res) => {
		
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			res.render('article/form-article', {errors: errors.errors, article: req.body});
			return;
		}
		
		const connection = app.config.dbConnection();
		const dao = new app.app.models.ArticleDAO(connection);
		
		dao.addArticle(req.body, function (error, result) {
			res.redirect('/');
		});
	});
	
	app.get('/article/new', function (req, res) {
		res.render('article/form-article', {errors: {}, article: {}});
	});
}