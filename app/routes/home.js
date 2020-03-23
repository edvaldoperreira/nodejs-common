// // const dbConnection = require('../../config/dbConnection');

// module.exports = function (app) {
// 	app.get('/', function (req, res) {

// 		// const connection = dbConnection();
// 		const connection = app.config.dbConnection();
// 		const dao = new app.app.models.ArticleDAO(connection);

// 		dao.getNews(function (error, result) {
// 			if (error) {
// 				res.send(error);
// 			} else {
// 				res.render('home', { news: result });
// 			}
// 		});

// 		// res.render('sections/home')
// 	});
// }