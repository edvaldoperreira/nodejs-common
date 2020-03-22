module.exports = function (app) {

  app.get('/form-add-article', function (req, res) {
    res.render('admin/form-article');
  });

  app.post('/add-article', function (req, res) {
    const article = req.body;

    const connection = app.config.dbConnection();
    const dao = new app.app.models.ArticleDAO(connection);

    dao.addArticle(article, function (error, result) {
      res.redirect('/');
    });
  });
}