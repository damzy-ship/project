const { initializeApp } = require("firebase/app");

const config = require('./config');

const db = initializeApp(config.firebaseConfig);
module.exports = db;