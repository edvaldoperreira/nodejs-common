const app = require('./config/server');

// const routeHome = require('./app/routes/home')(app);
// const routeGames = require('./app/routes/games')(app);
// const routeTechnology = require('./app/routes/technology')(app);
// const routeDevelopment = require('./app/routes/development')(app);

app.listen(3000, function() {
	console.log('Server running');
});