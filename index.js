require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000;

const dbRoutes = require("./src/v1/routes/route");
const userRoute = require("./src/v2/routes/routes.js");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/fullstack_mongoose", {
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected"));


// middleware
app.use(express.json());

// Routes
app.use("/v1/mahasiswa", dbRoutes);

app.use("/v2/users", userRoute);

// listen server
app.listen(PORT, () => {
  console.log(`server berhasil di running di port ${PORT}`);
});