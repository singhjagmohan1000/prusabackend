const path = require("path");
const HOMEDIR = path.join(__dirname, "..", "..");
const CONFIG = require(path.join(HOMEDIR, "config", "default"));
const MongoClient = require("mongodb").MongoClient;
const url = CONFIG.MONGO.URL;
const client = new MongoClient(url, { useNewUrlParser: true });
module.exports = client;
