const Series = require("../models/series");
const _ = require("lodash");

exports.seriesById = (req, res, next, id) => {
  Series.findById(id).exec((err, series) => {
    if (err || !series) {
      return res.status(400).json({
        error: err,
      });
    }
    req.series = series;
    next();
  });
};

exports.getSeriesAll = (req, res) => {
  Series.find()
    .then((seriesAll) => {
      res.json({ seriesAll });
    })
    .catch((err) => console.log(err));
};

exports.getSeriesById = (req, res) => {
  let series = req.series;
  res.json({ result: series });
};

exports.createSeries = (req, res) => {
  const series = new Series(req.body);

  series.save((err, result) => {
    if (err) return res.status(400).json({ error: err });
    res.status(200).json({ series: result });
  });
};

exports.updateSeries = (req, res) => {
  let series = req.series;
  series = _.extend(series, req.body);
  series.updated = Date.now();
  series.save((err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.json(series);
  });
};

exports.deleteSeries = (req, res) => {
  let series = req.series;
  series.remove((err, series) => {
    if (err) return res.status(400).json({ error: err });
    res.json({ message: "Series deleted successfully" });
  });
};
