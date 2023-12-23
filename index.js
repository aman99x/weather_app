require("dotenv").config();
const express = require("express");
const connectDb = require("./utils/db");
const cors = require("cors")

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET, POST, PUT, DELETE",
  credentials: true,
};

app.use(cors(corsOptions));

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
