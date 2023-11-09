const express = require("express");
const {
  getCats,
  getDuasBySubcat,
  getSubcatsByCat,
} = require("../controllers/dua_controller");

const router = express.Router();

router.get("/getCats", getCats);
router.get("/getDuasBySubcat/:subcat_id", getDuasBySubcat);
router.get("/getSubcatsByCat/:cat_id", getSubcatsByCat);

module.exports = router;
