const fs = require("fs");
const uuid = require("uuid"); // Importing the UUID library
const router = require("express").Router();

// GET route for notes
router.get("/notes", (req, res) => {
    // Read data from the JSON file
    const dbData = JSON.parse(fs.readFileSync("./db/db.json"));
     // Send the data as JSON response
    res.json(dbData);
});

// POST request for notes
router.post("/notes", (req, res) => {
     // Read data from the JSON file
    const dbData = JSON.parse(fs.readFileSync("./db/db.json"));
     // Create a new note object with provided title, text, and a unique id
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid.v4(), // Generating a unique id using UUID v4
    };
    // Add the new note to the data array
    dbData.push(newNote);
     // Write the updated data back to the JSON file
    fs.writeFileSync("./db/db.json", JSON.stringify(dbData));
     // Send the updated data as JSON response
    res.json(dbData)
});
// Export the router
module.exports = router