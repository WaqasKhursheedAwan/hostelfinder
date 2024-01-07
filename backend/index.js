require("dotenv").config({
  path: "config/.env",
});
const express = require("express");
const connectDatabase = require("./config/db");
const app = express();
app.use(express.json());
const port = process.env.PORT;
// requiring routes
const userRoutes = require("./routes/userRoutes");
// DATABASE CONFIGUR
connectDatabase();

// ROUTES
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
