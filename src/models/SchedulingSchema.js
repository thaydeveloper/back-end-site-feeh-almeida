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
    type: String,
  },
  services: {
    type: String,
  },
  servicesAdditional: {
    type: String,
  },
  durance: {
    type: Array,
  },
});

const Scheduling = mongoose.model("Scheduling", schedulingSchema);

module.exports = Scheduling;
