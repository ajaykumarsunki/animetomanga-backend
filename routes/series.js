const express = require("express");
const {
  getSeriesAll,
  createSeries,
  seriesById,
  updateSeries,
  deleteSeries,
  getSeriesById,
} = require("../controllers/series");

const router = express.Router();

router.get("/seriesAll", getSeriesAll);
router.get("/series/:seriesId", getSeriesById);
router.post("/series", createSeries);
router.put("/series/:seriesId", updateSeries);
router.delete("/series/:seriesId", deleteSeries);

//any routes containing param :seriesId will first execute seriesById()
router.param("seriesId", seriesById);

module.exports = router;
