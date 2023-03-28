const express = require('express');
const books = require('./db')
const app = express()

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    res.send('hello world')
});

app.get('/members', (req, res) => {
    res.json({ books });
})

app.get('/member/:id', (req, res) => {

    res.json(books.find(book => book.id === Number(req.params.id)))

})

app.listen(3050, () => {
    console.log('Start server at port 3050.')
})

