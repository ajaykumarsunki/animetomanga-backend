const express = require("express");
const {
  getEPostTypes,
  createEPostType,
  ePostTypeById,
  updateEPostType,
  deleteEPostType,
  getEPostTypeById,
} = require("../controllers/ePostType");

const router = express.Router();

router.get("/ePostTypes", getEPostTypes);
router.get("/ePostType/:ePostTypeId", getEPostTypeById);
router.post("/ePostType", createEPostType);
router.put("/ePostType/:ePostTypeId", updateEPostType);
router.delete("/ePostType/:ePostTypeId", deleteEPostType);

//any routes containing param :ePostTypeId will first execute ePostTypeById()
router.param("ePostTypeId", ePostTypeById);

module.exports = router;
