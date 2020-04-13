const path = require("path");
const MODELS = path.join(__dirname, "..");
const db = require(path.join(MODELS, "models", "firebaseProperties"));
const HOMEDIR = path.join(__dirname, "..", "..");
const CONFIG = require(path.join(HOMEDIR, "config", "default"));
module.exports = {
  teamMembers: (req, res, next) => {
      let docRef = db.collection(CONFIG.FIREBASE.COLLECTION.TEAM);
      var result=[];
      docRef.where('active', '==', true).get()
          .then(snapshot => {
              if (snapshot.empty) {
                  console.log('No matching documents.');
                  res.status(404).send();
              }
              snapshot.forEach(doc => {
                  result.push(doc.data());
              });
              console.log("hi")
              res.status(200).send(result);
          })
          .catch(err => {
              console.log(err);
              res.status(503).send();
          });

  }
};
