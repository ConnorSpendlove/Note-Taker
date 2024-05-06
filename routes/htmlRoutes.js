
// require necessary packages
const router = require(`express`).Router();
const path = require(`path`)

// makes a route that redirects to notes.html
router.get(`/notes`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/notes.html`))
})

// makes a route that redirects to index.html
router.get(`/` , (req, res) => {
    res.sendFile(path.join(__dirname, `../public/index.html`))
})

//exports
module.exports = router;