const Details = require("../models/Details");

exports.getDetails = async (req, res) => {
  try {
    const details = await Details.find({ status: req.params.status });
    if (!details) {
      return res.status(404).json({
        success: false,
        error: "No transaction found",
      });
    }
    return res.status(200).json({
      success: true,
      data: details,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

exports.addDetail = async (req, res) => {
  try {
    const detail = await Details.create(req.body);

    return res.status(201).json({
      success: true,
      data: detail,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

exports.updateDetail = async (req, res) => {
  try {
    const detail = await Details.findByIdAndUpdate(
      req.params.id,
      {
        status: req.params.status,
      },
      { new: true }
    );
    return res.status(201).json({
      success: true,
      data: detail,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};
