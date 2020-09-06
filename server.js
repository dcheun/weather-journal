// Setup empty JS object to act as endpoint for all routes
projectData = {};
const PORT = 3000;
// To hold new data entries.
const data = [];

// Require Express to run server and routes
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Start up an instance of app
const app = express();

// Middleware
// Here we are configuring express to use body-parser as middle-ware.
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse applicaton/json
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Get projectData - most recent entry
app.get("/data", (req, res) => {
  res.send(projectData);
});

// Get all data
app.get("/all", (req, res) => {
  res.send(data);
});

// Post route to add new data.
app.post("/addData", (req, res) => {
  newEntry = {
    temperature: req.body.temperature,
    date: req.body.date,
    userResponse: req.body.userResponse,
  };
  data.push(newEntry);
  // Save latest entry to projectData.
  projectData = { ...newEntry };
  res.send(projectData);
});

// Setup Server
app.listen(PORT, () => {
  console.log(`Server started on localhost port ${3000}`);
});
