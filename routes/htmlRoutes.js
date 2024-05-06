// Require necessary packages
const router = require(`express`).Router();
const path = require(`path`)

// Makes a route that redirects to notes.html when called
router.get(`/notes`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/notes.html`))
})
// Makes a route that redirects to index.html when called
router.get(`/` , (req, res) => {
    res.sendFile(path.join(__dirname, `../public/index.html`))
})

//exports
module.exports = router;