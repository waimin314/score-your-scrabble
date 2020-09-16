const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/entries', (req, res) => {
  res.send('Hola Mola');
});

app.post('/entries', (req, res) => {
  res.sendStatus(200);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`listening at ${PORT}`);
});
