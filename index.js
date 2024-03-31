const express = require('express');
const app = express();
const cors = require(cors());
require('dotenv').config()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("hii");
});

app.get('*', (req, res) => {
    res.send("hii");
});


const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log("server is running on port", port)
});