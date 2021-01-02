const EUserType = require("../models/eUserType");
const _ = require("lodash");

exports.eUserTypeById = (req, res, next, id) => {
  EUserType.findById(id).exec((err, eUserType) => {
    if (err || !eUserType) {
      return res.status(400).json({
        error: err,
      });
    }
    req.eUserType = eUserType;
    next();
  });
};

exports.getEUserTypes = (req, res) => {
  EUserType.find()
    .then((eUserTypes) => {
      res.json({ eUserTypes });
    })
    .catch((err) => console.log(err));
};

exports.getEUserTypeById = (req, res) => {
  let eUserType = req.eUserType;
  res.json({ result: eUserType });
};

exports.createEUserType = (req, res) => {
  const eUserType = new EUserType(req.body);

  eUserType.save((err, result) => {
    if (err) return res.status(400).json({ error: err });
    res.status(200).json({ eUserType: result });
  });
};

exports.updateEUserType = (req, res) => {
  let eUserType = req.eUserType;
  eUserType = _.extend(eUserType, req.body);
  eUserType.updated = Date.now();
  eUserType.save((err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.json(eUserType);
  });
};

exports.deleteEUserType = (req, res) => {
  let eUserType = req.eUserType;
  eUserType.remove((err, eUserType) => {
    if (err) return res.status(400).json({ error: err });
    res.json({ message: "EUserType deleted successfully" });
  });
};
