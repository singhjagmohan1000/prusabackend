const path = require("path");
const HOMEDIR = path.join(__dirname, "..", "..");
const CONFIG = require(path.join(HOMEDIR, "config", "default"));
const MODELS = path.join(__dirname, "..");
const client = require(path.join(MODELS, "models", "pollProperties"));

module.exports = {
  getTeamMembers: (req, res, next) => {
    client.connect(function(err) {
      const db = client.db(CONFIG.MONGO.DB_NAME);
      const collection = db.collection(CONFIG.MONGO.TEAM_COLLECTION);
      collection.find({}).toArray(function(err, results) {
        if (err) {
          console.log(err);
          res.status(400).send(err);
        } else res.status(200).send(results);
      });
    });
  }
};
