const Img = require("../models/img");
const _ = require("lodash");

exports.imgById = (req, res, next, id) => {
  Img.findById(id).exec((err, img) => {
    if (err || !img) {
      return res.status(400).json({
        error: err,
      });
    }
    req.img = img;
    next();
  });
};

exports.getImgs = (req, res) => {
  Img.find()
    .then((imgs) => {
      res.json({ imgs });
    })
    .catch((err) => console.log(err));
};

exports.getImgById = (req, res) => {
  let img = req.img;
  res.json({ result: img });
};

exports.createImg = (req, res) => {
  const img = new Img(req.body);

  img.save((err, result) => {
    if (err) return res.status(400).json({ error: err });
    res.status(200).json({ img: result });
  });
};

exports.updateImg = (req, res) => {
  let img = req.img;
  img = _.extend(img, req.body);
  img.updated = Date.now();
  img.save((err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.json(img);
  });
};

exports.deleteImg = (req, res) => {
  let img = req.img;
  img.remove((err, img) => {
    if (err) return res.status(400).json({ error: err });
    res.json({ message: "Img deleted successfully" });
  });
};
