const express = require("express");
const fs = require("fs");
const path = require("path");

require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to our secure site! Nothing to see here 😉");
});

// Route to download the .env file
app.get("/.env", (req, res) => {
  const envPath = path.join(__dirname, ".env");

  if (fs.existsSync(envPath)) {
    res.download(envPath, "config.env"); // This triggers the file download
  } else {
    res.status(404).send("404 Not Found");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
