const path = require("path");
const HOMEDIR = path.join(__dirname, "..", "..");
const CONFIG = require(path.join(HOMEDIR, "config", "default"));
const MODELS = path.join(__dirname, "..");
const client = require(path.join(MODELS, "models", "pollProperties"));

module.exports = {
  getPollResults: (req, res, next) => {
    client.connect(function(err) {
      const db = client.db(CONFIG.MONGO.DB_NAME);
      const collection = db.collection(CONFIG.MONGO.POLL_COLLECTION);
      collection.findOne({ prusa_current_poll: true }, function(err, results) {
        res.send(results);
      });
    });
  },
  getPollQuestion: (req, res, next) => {
    client.connect(function(err) {
      const db = client.db(CONFIG.MONGO.DB_NAME);
      const collection = db.collection(CONFIG.MONGO.POLL_COLLECTION);
      collection.findOne({ prusa_current_poll: true }, function(err, results) {
        res.send(results);
      });
    });
  },
  updatePollResults: (req, res, next) => {
    console.log(req.body.option);

    var option = req.body.option;
    var query = "prusa_poll_results." + option;

    const updateDocuments = function(db, callback) {
      const collection = db.collection(CONFIG.MONGO.POLL_COLLECTION);

      collection.findOneAndUpdate(
        { prusa_current_poll: true },
        { $inc: { [query]: 1, "prusa_poll_results.total_votes": 1 } },
        { upsert: true, new: true },
        function(err, docs) {
          callback(docs);
        }
      );
    };

    client.connect(function(err) {
      const db = client.db(CONFIG.MONGO.DB_NAME);

      updateDocuments(db, function(docs) {
        res.send(docs.value);
      });
    });
  }
};
