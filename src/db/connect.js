const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(
      "mongodb+srv://thaydeveloper26:LgOZV8TH0UZIoGTZ@cluster0.dltzmfi.mongodb.net/?retryWrites=true&w=majority"
    );
  } catch (error) {
    console.log("error:" + error);
  }
}

module.exports = main;
