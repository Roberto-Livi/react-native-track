const express = require('express');
const mongoose = require('mongoose');

// if you change wifi network -> add new ip address
const mongoUri = "mongodb+srv://roblivi:roblivi@cluster0.zkpln8x.mongodb.net/?retryWrites=true&w=majority";

const app = express();
mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
  console.log("Connected to mongo instance");
});

mongoose.connection.on('error', () => {
  console.log("Error connecting to mongo");
})

app.get('/', (req, res) => {
  res.send('Hi there!');
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});