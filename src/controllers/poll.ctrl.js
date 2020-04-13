const path = require("path");
const HOMEDIR = path.join(__dirname, "..", "..");
const CONFIG = require(path.join(HOMEDIR, "config", "default"));
const MODELS = path.join(__dirname, "..");
const db = require(path.join(MODELS, "models", "firebaseProperties"));
const FieldValue = require('firebase-admin').firestore.FieldValue;

module.exports = {

  getPollQuestion: (req, res, next) => {
    let docRef = db.collection(CONFIG.FIREBASE.COLLECTION.POLL);
    var result=[];
    let query = docRef.where('active', '==', true).get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log('No matching documents.');
            res.status(404).send();
          }
          snapshot.forEach(doc => {

            result.push({poll_id:doc.id,poll_data:doc.data()});
          });

          res.status(200).send(result[0]);
        })
        .catch(err => {
            console.log(err)
          res.status(503).send();
        });
  },
  updatePollResults: (req, res, next) => {
      let pollId = req.body.poll_id;

      let option=req.params.option;
      let query =  "poll_options." + option +".result";
      let docRef = db.collection(CONFIG.FIREBASE.COLLECTION.POLL);

      let updateNested = docRef.doc(pollId).update({
          [query] :FieldValue.increment(1),
            'total_votes': FieldValue.increment(1)
      }).then(
          snapshot=> {
              console.log(snapshot)
              res.status(200).send("OK");
          })
          .catch(err=>{
              console.log(err);
              res.status(503).send("Internal Error");
          });
  }
};
