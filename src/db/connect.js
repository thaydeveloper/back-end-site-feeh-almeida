const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(
      "mongodb+srv://thaydeveloper26:1996@cluster0.dltzmfi.mongodb.net/?authMechanism=DEFAULT"
    );
    console.log("conectouuuu");
  } catch (error) {
    console.log("error:" + error);
  }
}

module.exports = main;
