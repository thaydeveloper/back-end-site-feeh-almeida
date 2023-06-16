const mongoose = require("mongoose");

const { Schema } = mongoose;

const schedulingSchema = new Schema({
  id: { type: String },
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  date: {
    type: String,
  },
  day: {
    type: Number,
  },
  time: {
    type: Number,
  },
  services: {
    type: String,
  },
});

const Scheduling = mongoose.model("Scheduling", schedulingSchema);

module.exports = Scheduling;
