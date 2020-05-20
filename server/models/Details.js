const mongoose = require("mongoose");

const DetailSchema = new mongoose.Schema({
  _id: String,
  title: String,
  info: String,
  status: String,
});

module.exports = mongoose.model("Details", DetailSchema);
