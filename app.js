require('dotenv').config();
const express = require("express");
// const connectDB = require("./controllers/db/config");
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");
const { servis } = require("./data");
const session = require("express-session");
// const dotenv = require("dotenv").config();

//connexion mongodb
// connectDB();

const app = express();

// app.engine("html", ejs.__express);

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/apropos", (req, res) => {
  res.render("layouts/apropos");
});

app.get("/services", (req, res) => {
  res.render("layouts/services");
});

app.get("/evenement", (req, res) => {
  res.render("layouts/evenement");
});

app.get("/tarifs", (req, res) => {
  res.render("layouts/tarifs");
});

app.get("/contact", (req, res) => {
  res.render("layouts/contact");
});

app.get("/dashbord", (req, res) => {
  res.render("layouts/dashbord");
});


app.get("/gestions", (req, res) => {
  res.render("layouts/gestions");
});

app.get("/inscription", (req, res) => {
  res.render("layouts/inscription");
});
app.get("/dashbord", (req, res) => {
  res.render("layouts/dashbord");
});


app.listen(4001);
console.log("L'application tourne au port 4001");

