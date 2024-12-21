const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  destination: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  journalEntry: { type: String },
});

const Trips = mongoose.model("Trips", tripSchema);

module.exports = Trips;