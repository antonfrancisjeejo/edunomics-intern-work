const express = require("express");
const router = express.Router();
const {
  getDetails,
  addDetail,
  updateDetail,
} = require("../controllers/details");
router.route("/").post(addDetail);
router.route("/:status").get(getDetails);
router.route("/:id/:status").put(updateDetail);

module.exports = router;
