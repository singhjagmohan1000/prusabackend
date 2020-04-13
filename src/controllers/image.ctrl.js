const path = require("path");
const HOMEDIR = path.join(__dirname, "..", "..");
const CONFIG = require(path.join(HOMEDIR, "config", "default"));
const MODELS = path.join(__dirname, "..");
const db = require(path.join(MODELS, "models", "firebaseProperties"));
const FieldValue = require('firebase-admin').firestore.FieldValue;

module.exports = {

  loadImage: (req, res, next) => {
    let docRef = db.collection(CONFIG.FIREBASE.COLLECTION.IMAGES);
    var result=[];
    let query = docRef.get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log('No matching documents.');
            res.status(404).send();
          }
          snapshot.forEach(doc => {

            result.push(doc.data());
          });

          res.status(200).send(result[0]);
        })
        .catch(err => {
            console.log(err)
          res.status(503).send();
        });
  }
};
