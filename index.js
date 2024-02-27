// importing packages
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 3000;


const app = express();


app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
})