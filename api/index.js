const express = require('express');
const app = express();
const authController = require('./controllers/user');
const mongoose = require('mongoose');
const ENV = require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASSWORD}@test-cluster-axxhv.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true}, (res) => {
    console.log("Connected to DB")
})

app.use(express.json());
app.use('/api/users', authController);
app.listen(8080, () => {
    console.log("Server is started and running")
})