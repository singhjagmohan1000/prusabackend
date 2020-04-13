const path = require("path");
const HOMEDIR = path.join(__dirname, "..", "..");
const CONFIG = require(path.join(HOMEDIR, "config", "default"));
const MODELS = path.join(__dirname, "..");
const db = require(path.join(MODELS, "models", "firebaseProperties"));

module.exports = {
  createPoll: (req, res, next) => {
    let docRef = db.collection(CONFIG.FIREBASE.COLLECTION.POLL);
    let data = req.body;
    docRef.add(data);
    res.status(201).send();
  }
};
