const express = require("express");
const {
  getEMetaTags,
  createEMetaTag,
  eMetaTagById,
  updateEMetaTag,
  deleteEMetaTag,
  getEMetaTagById,
} = require("../controllers/eMetaTag");

const router = express.Router();

router.get("/eMetaTags", getEMetaTags);
router.get("/eMetaTag/:eMetaTagId", getEMetaTagById);
router.post("/eMetaTag", createEMetaTag);
router.put("/eMetaTag/:eMetaTagId", updateEMetaTag);
router.delete("/eMetaTag/:eMetaTagId", deleteEMetaTag);

//any routes containing param :eMetaTagId will first execute eMetaTagById()
router.param("eMetaTagId", eMetaTagById);

module.exports = router;
