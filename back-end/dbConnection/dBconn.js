require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MDB_URL)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("failed to connect to MongoDB" + error);
  });
