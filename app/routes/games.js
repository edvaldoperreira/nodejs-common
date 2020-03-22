module.exports = function (app) {
	app.get('/games', function(req, res) {
		res.render('games')
	});
}