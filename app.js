require('dotenv').config()
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/insta', (req, res) => {
  res.send("<h1>hi finta</h1>");
});
app.listen(process.env.port, () => {
  console.log(`Example app listening at http://localhost:${process.env.port}`);
}); 