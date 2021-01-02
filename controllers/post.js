const Post = require("../models/post");
const _ = require("lodash");

exports.postById = (req, res, next, id) => {
  Post.findById(id).exec((err, post) => {
    if (err || !post) {
      return res.status(400).json({
        error: err,
      });
    }
    req.post = post;
    next();
  });
};

exports.getPosts = (req, res) => {
  Post.find()
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => console.log(err));
};

exports.getPostById = (req, res) => {
  let post = req.post;
  res.json({ result: post });
};

exports.createPost = (req, res) => {
  const post = new Post(req.body);

  post.save((err, result) => {
    if (err) return res.status(400).json({ error: err });
    res.status(200).json({ post: result });
  });
};

exports.updatePost = (req, res) => {
  let post = req.post;
  post = _.extend(post, req.body);
  post.updated = Date.now();
  post.save((err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.json(post);
  });
};

exports.deletePost = (req, res) => {
  let post = req.post;
  post.remove((err, post) => {
    if (err) return res.status(400).json({ error: err });
    res.json({ message: "Post deleted successfully" });
  });
};
