const express = require("express");
const fs = require("fs");
const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Welcome to our secure site! Nothing to see here 😉");
});

// Intentional Misconfiguration: Expose .env file
app.get("/.env", (req, res) => {
  if (fs.existsSync(".env")) {
    res.sendFile(__dirname + "/.env");
  } else {
    res.send("Nothing here!");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
