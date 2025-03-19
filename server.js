const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// Serve static files (index.html, etc.)
app.use(express.static("public"));

// Route to serve the .env file only when the correct path is entered
app.get("/.env", (req, res) => {
    const filePath = path.join(__dirname, ".env");

    if (fs.existsSync(filePath)) {
        res.download(filePath, ".env"); // Force download as .env
    } else {
        res.status(404).send("404 Not Found");
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
