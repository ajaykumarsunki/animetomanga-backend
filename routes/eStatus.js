const express = require("express");
const {
  getEStatuses,
  createEStatus,
  eStatusById,
  updateEStatus,
  deleteEStatus,
  getEStatusById,
} = require("../controllers/eStatus");

const router = express.Router();

router.get("/eStatuses", getEStatuses);
router.get("/eStatus/:eStatusId", getEStatusById);
router.post("/eStatus", createEStatus);
router.put("/eStatus/:eStatusId", updateEStatus);
router.delete("/eStatus/:eStatusId", deleteEStatus);

//any routes containing param :eStatusId will first execute eStatusById()
router.param("eStatusId", eStatusById);

module.exports = router;
