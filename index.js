const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const cors = require("cors");
const ejs = require('ejs')
require("dotenv").config();
require("./config/dbConnection")();
const userRoute = require("./routes/userRoutes");
const { default: mongoose } = require("mongoose");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/views'));
app.use("/users", userRoute)
app.get('/', (req, res) => {
  res.render('login');
});
app.get("/signup", (req, res) => {
  res.render('signup')
  // res.sendFile(path.join(__dirname, "public", "signup.html"));
});
app.get("/forgot-password", (req, res) => {
  res.render('forgot')
  // res.sendFile(path.join(__dirname, "public", "signup.html"));
});
app.get("/reset-password", (req, res) => {
  res.render('new')
  // res.sendFile(path.join(__dirname, "public", "signup.html"));
});
// app.get("/login", (req, res) => {
//   res.sendFile(path.join(__dirname, "views", "signin.html"));
// });

app.listen(port, () => {
  console.log("===================**===================");
  const date = new Date().toISOString();
  console.log("date: ", date);
  console.log(`listening on http://localhost:${port}`);
//   mongoose.connect(process.env.MONGO_DB, () => {
//     console.log("Mongo connected");
// });
});
