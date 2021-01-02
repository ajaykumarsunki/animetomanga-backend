const express = require("express");
const {
  getPosts,
  createPost,
  postById,
  updatePost,
  deletePost,
  getPostById,
} = require("../controllers/post");

const router = express.Router();

router.get("/posts", getPosts);
router.get("/post/:postId", getPostById);
router.post("/post", createPost);
router.put("/post/:postId", updatePost);
router.delete("/post/:postId", deletePost);

//any routes containing param :postId will first execute postById()
router.param("postId", postById);

module.exports = router;
