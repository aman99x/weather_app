require("dotenv").config();
const express = require("express");
const connectDb = require("./utils/db");

const app = express();

const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

app.use("/api/crud", require("./routes/crud"));

// Start the server
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});
