require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 5000;

const dbRoutes = require("./src/routes/route");

const app = express();

// middleware
app.use(express.json());

// Routes
app.use("/mahasiswa", dbRoutes);

// listen server
app.listen(PORT, () => {
  console.log(`server berhasil di running di port ${PORT}`);
});