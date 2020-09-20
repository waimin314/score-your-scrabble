const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const checkWord = require('check-if-word');
const MongoClient = require('mongodb').MongoClient;

const words = checkWord('en');
const DB_NAME = 'Scrabble';
const COLLECTION_NAME = 'Entries';
const MAX_WORDS = 15;
let allEntries = undefined;

dotenv.config({ path: './config/config.env' });

const app = express();

app.use(cors());

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

app.use(express.json());

app.get('/entries', (req, res) => {
  client
    .db(DB_NAME)
    .collection(COLLECTION_NAME)
    .find()
    .toArray()
    .then((results) => (allEntries = results));
  res.json(allEntries);
});

app.post('/entries', (req, res) => {
  console.log(req.body);
  const word = req.body.word;
  if (!word) {
    return res.status(400).send('Empty content');
  }
  if (entryExists(word)) {
    return res.status(400).send(`${word} already exists`);
  }
  if (!words.check(word)) {
    return res.status(400).send(`${word} is not a valid word`);
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
  if (allEntries.length > MAX_WORDS) deleteFirstEntry();
  res.sendStatus(201);
});

const deleteFirstEntry = () => {
  const entry = allEntries.shift();
  client
    .db(DB_NAME)
    .collection(COLLECTION_NAME)
    .deleteOne({ word: entry.word });
};

const entryExists = (word) => {
  let tmp = false;
  allEntries.forEach((entry) => {
    if (entry.word == word) {
      tmp = true;
      return;
    }
  });
  return tmp;
};

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`listening at ${PORT}`);
});
