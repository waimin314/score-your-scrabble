const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const MongoClient = require('mongodb').MongoClient;

const DB_NAME = 'Scrabble';
const COLLECTION_NAME = 'Entries';
let allEntries = undefined;

dotenv.config({ path: './config/config.env' });

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  if (err) {
    console.log(`Error establishing connection to MongoDB ${err.message}`);
    process.exit(1);
  }
  client
    .db(DB_NAME)
    .collection(COLLECTION_NAME)
    .find()
    .toArray()
    .then((results) => (allEntries = results));
});

const app = express();

app.use(cors());
app.use(express.json());

app.get('/entries', (req, res) => {
  res.send('Hola Mola');
});

app.post('/entries', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`listening at ${PORT}`);
});
