const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Welcome to our secure site! Nothing to see here 😉");
});

// Force .env file to be downloaded
app.get("/.env", (req, res) => {
  const envPath = path.join(__dirname, ".env");

  if (fs.existsSync(envPath)) {
    res.setHeader("Content-Disposition", "attachment; filename=.env");
    res.setHeader("Content-Type", "text/plain");
    res.sendFile(envPath);
  } else {
    res.status(404).send("File not found!");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

