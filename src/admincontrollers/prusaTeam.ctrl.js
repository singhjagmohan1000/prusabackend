const path = require("path");
const MODELS = path.join(__dirname, "..");
const db = require(path.join(MODELS, "models", "firebaseProperties"));
const HOMEDIR = path.join(__dirname, "..", "..");
const CONFIG = require(path.join(HOMEDIR, "config", "default"));
module.exports = {
    addTeam: (req, res, next) => {
        let docRef = db.collection(CONFIG.FIREBASE.COLLECTION.TEAM);
        let data = req.body;
        data.forEach(member => docRef.add(member));
        res.status(201).send();
    }
};
