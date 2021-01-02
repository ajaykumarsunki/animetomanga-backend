const EPostType = require("../models/ePostType");
const _ = require("lodash");

exports.ePostTypeById = (req, res, next, id) => {
  EPostType.findById(id).exec((err, ePostType) => {
    if (err || !ePostType) {
      return res.status(400).json({
        error: err,
      });
    }
    req.ePostType = ePostType;
    next();
  });
};

exports.getEPostTypes = (req, res) => {
  EPostType.find()
    .then((ePostTypes) => {
      res.json({ ePostTypes });
    })
    .catch((err) => console.log(err));
};

exports.getEPostTypeById = (req, res) => {
  let ePostType = req.ePostType;
  res.json({ result: ePostType });
};

exports.createEPostType = (req, res) => {
  const ePostType = new EPostType(req.body);

  ePostType.save((err, result) => {
    if (err) return res.status(400).json({ error: err });
    res.status(200).json({ ePostType: result });
  });
};

exports.updateEPostType = (req, res) => {
  let ePostType = req.ePostType;
  ePostType = _.extend(ePostType, req.body);
  ePostType.updated = Date.now();
  ePostType.save((err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.json(ePostType);
  });
};

exports.deleteEPostType = (req, res) => {
  let ePostType = req.ePostType;
  ePostType.remove((err, ePostType) => {
    if (err) return res.status(400).json({ error: err });
    res.json({ message: "EPostType deleted successfully" });
  });
};
