const fs = require("fs");

fs.writeFileSync("log.txt", "My name is Aditya Mohan"); // Rewrites the existing file, creates one if not exists
fs.appendFileSync("log.txt", "\nI am learning node.js"); // appends the existing file, creates one if not exists
