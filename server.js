const express = require('express');

const app = express();

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
