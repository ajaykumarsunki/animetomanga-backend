const EStatus = require("../models/eStatus");
const _ = require("lodash");

exports.eStatusById = (req, res, next, id) => {
  EStatus.findById(id).exec((err, eStatus) => {
    if (err || !eStatus) {
      return res.status(400).json({
        error: err,
      });
    }
    req.eStatus = eStatus;
    next();
  });
};

exports.getEStatuses = (req, res) => {
  EStatus.find()
    .then((eStatuses) => {
      res.json({ eStatuses });
    })
    .catch((err) => console.log(err));
};

exports.getEStatusById = (req, res) => {
  let eStatus = req.eStatus;
  res.json({ result: eStatus });
};

exports.createEStatus = (req, res) => {
  const eStatus = new EStatus(req.body);

  eStatus.save((err, result) => {
    if (err) return res.status(400).json({ error: err });
    res.status(200).json({ eStatus: result });
  });
};

exports.updateEStatus = (req, res) => {
  let eStatus = req.eStatus;
  eStatus = _.extend(eStatus, req.body);
  eStatus.updated = Date.now();
  eStatus.save((err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.json(eStatus);
  });
};

exports.deleteEStatus = (req, res) => {
  let eStatus = req.eStatus;
  eStatus.remove((err, eStatus) => {
    if (err) return res.status(400).json({ error: err });
    res.json({ message: "EStatus deleted successfully" });
  });
};
