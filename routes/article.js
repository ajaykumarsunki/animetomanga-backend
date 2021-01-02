const express = require("express");
const {
  getArticles,
  createArticle,
  articleById,
  updateArticle,
  deleteArticle,
  getArticleById,
} = require("../controllers/article");

const router = express.Router();

router.get("/articles", getArticles);
router.get("/article/:articleId", getArticleById);
router.post("/article", createArticle);
router.put("/article/:articleId", updateArticle);
router.delete("/article/:articleId", deleteArticle);

//any routes containing param :articleId will first execute articleById()
router.param("articleId", articleById);

module.exports = router;
