const express = require("express");
const {
  getEUserTypes,
  createEUserType,
  eUserTypeById,
  updateEUserType,
  deleteEUserType,
  getEUserTypeById,
} = require("../controllers/eUserType");

const router = express.Router();

router.get("/eUserTypes", getEUserTypes);
router.get("/eUserType/:eUserTypeId", getEUserTypeById);
router.post("/eUserType", createEUserType);
router.put("/eUserType/:eUserTypeId", updateEUserType);
router.delete("/eUserType/:eUserTypeId", deleteEUserType);

//any routes containing param :eUserTypeId will first execute eUserTypeById()
router.param("eUserTypeId", eUserTypeById);

module.exports = router;
