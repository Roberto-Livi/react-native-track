require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const requireAuth = require('./middlewares/requireAuth');

// if you change wifi network -> add new ip address
const mongoUri = "mongodb+srv://roblivi:roblivi@cluster0.zkpln8x.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
  console.log("Connected to mongo instance");
});

mongoose.connection.on('error', () => {
  console.log("Error connecting to mongo");
})

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});