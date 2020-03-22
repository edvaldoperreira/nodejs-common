module.exports = function (app) {
	app.get('/development', function(req, res) {
		res.render('development')
	});
}