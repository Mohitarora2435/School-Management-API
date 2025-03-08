const express = require ('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const db = require('./db');

const app = express()
app.use(bodyParser.json());

app.use('/api', require('./routes/school'))

app.get('/', (req, res) => {
    res.send('School Management API is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`)
});
