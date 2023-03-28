const express = require('express');
const books = require('./db')
const app = express()
// Create a router to handle routes
const router = express.Router();
const serverless = require("serverless-http");
const PORT = process.env.PORT || 3050
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


router.get('/', (req, res) => {

    res.send('hello world')
});

router.get('/members', (req, res) => {
    res.json({ books });
})

router.get('/member/:id', (req, res) => {

    res.json(books.find(book => book.id === Number(req.params.id)))

})

// Use the router to handle requests to the `/.netlify/functions/api` path
app.use(`/.netlify/functions/api`, router);
// Export the app and the serverless function
module.exports = app;
module.exports.handler = serverless(app);

app.listen(PORT, () => {
    console.log(`Start server at port ${PORT}`)
})

