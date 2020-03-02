const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const apiPort = 3000;

const db = require('./db');
const movieRouter = require('./routes/movie-route')

app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyparser.json());

db.on('error', console.error.bind(console, "Mongodb connection error"));

app.get('/', (req, res) => {
    res.send('backend with express!');
})

app.use('/api', movieRouter);

app.listen(apiPort, () => console.log(`server is running on port ${apiPort}`));

