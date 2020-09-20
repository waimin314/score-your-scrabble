const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const checkWord = require('check-if-word');
const MongoClient = require('mongodb').MongoClient;

const words = checkWord('en');
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
  res.json(allEntries);
});

app.post('/entries', (req, res) => {
  console.log(req.body);
  if (!req.body.word) {
    return res.status(400).send('Empty content');
  }
  if (!words.check(req.body.word)) {
    return res.status(400).send(`${req.body.word} is not a valid word`);
  }
  client
    .db(DB_NAME)
    .collection(COLLECTION_NAME)
    .insertOne(req.body)
    .then(() => {
      allEntries.push(req.body);
      console.log(`successfully added ${req.body.word}`);
    })
    .catch((err) => {
      console.log(`Error adding to Database. ${err.message}`);
    });

  res.sendStatus(201);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`listening at ${PORT}`);
});
