const EMetaTag = require("../models/eMetaTag");
const _ = require("lodash");

exports.eMetaTagById = (req, res, next, id) => {
  EMetaTag.findById(id).exec((err, eMetaTag) => {
    if (err || !eMetaTag) {
      return res.status(400).json({
        error: err,
      });
    }
    req.eMetaTag = eMetaTag;
    next();
  });
};

exports.getEMetaTags = (req, res) => {
  EMetaTag.find()
    .then((eMetaTags) => {
      res.json({ eMetaTags });
    })
    .catch((err) => console.log(err));
};

exports.getEMetaTagById = (req, res) => {
  let eMetaTag = req.eMetaTag;
  res.json({ result: eMetaTag });
};

exports.createEMetaTag = (req, res) => {
  const eMetaTag = new EMetaTag(req.body);

  eMetaTag.save((err, result) => {
    if (err) return res.status(400).json({ error: err });
    res.status(200).json({ eMetaTag: result });
  });
};

exports.updateEMetaTag = (req, res) => {
  let eMetaTag = req.eMetaTag;
  eMetaTag = _.extend(eMetaTag, req.body);
  eMetaTag.updated = Date.now();
  eMetaTag.save((err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.json(eMetaTag);
  });
};

exports.deleteEMetaTag = (req, res) => {
  let eMetaTag = req.eMetaTag;
  eMetaTag.remove((err, eMetaTag) => {
    if (err) return res.status(400).json({ error: err });
    res.json({ message: "EMetaTag deleted successfully" });
  });
};
