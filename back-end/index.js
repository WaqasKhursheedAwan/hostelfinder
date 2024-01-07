require("dotenv").config();

const express = require("express");
const dBConnection = require("./dbConnection/dBconn");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

// REQUIRING ROUTES
const registrationRoute = require("./routes/registrationRoute");
const loginRoute = require("./routes/loginRoute");

app.use("/api", registrationRoute);
app.use("/api", loginRoute);

// DATA BASE CONNECTION
// dBConnection;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
