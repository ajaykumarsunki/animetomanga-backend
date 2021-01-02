const express = require("express");
const {
  getImgs,
  createImg,
  imgById,
  updateImg,
  deleteImg,
  getImgById,
} = require("../controllers/img");

const router = express.Router();

router.get("/imgs", getImgs);
router.get("/img/:imgId", getImgById);
router.post("/img", createImg);
router.put("/img/:imgId", updateImg);
router.delete("/img/:imgId", deleteImg);

//any routes containing param :imgId will first execute imgById()
router.param("imgId", imgById);

module.exports = router;
