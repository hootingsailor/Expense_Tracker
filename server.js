const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/connectDB');

dotenv.config();

connectDB();

const app = express();
app.use(cors());


const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});