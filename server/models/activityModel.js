const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  trip: { type: mongoose.Schema.Types.ObjectId, ref: "Trips" },
  activitySpot: { type: String },
  rating: { type: String },
  review: { type: String },
});

const Activities = mongoose.model("Activities", activitySchema);

module.exports = Activities;