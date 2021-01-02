const Article = require("../models/article");
const _ = require("lodash");

exports.articleById = (req, res, next, id) => {
  Article.findById(id).exec((err, article) => {
    if (err || !article) {
      return res.status(400).json({
        error: err,
      });
    }
    req.article = article;
    next();
  });
};

exports.getArticles = (req, res) => {
  Article.find()
    .then((articles) => {
      res.json({ articles });
    })
    .catch((err) => console.log(err));
};

exports.getArticleById = (req, res) => {
  let article = req.article;
  res.json({ result: article });
};

exports.createArticle = (req, res) => {
  const article = new Article(req.body);

  article.save((err, result) => {
    if (err) return res.status(400).json({ error: err });
    res.status(200).json({ article: result });
  });
};

exports.updateArticle = (req, res) => {
  let article = req.article;
  article = _.extend(article, req.body);
  article.updated = Date.now();
  article.save((err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.json(article);
  });
};

exports.deleteArticle = (req, res) => {
  let article = req.article;
  article.remove((err, article) => {
    if (err) return res.status(400).json({ error: err });
    res.json({ message: "Article deleted successfully" });
  });
};
