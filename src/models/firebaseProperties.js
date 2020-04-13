const path = require("path");
const HOMEDIR = path.join(__dirname, "..", "..");
const CONFIG = require(path.join(HOMEDIR, "config", "default"));
const admin = require('firebase-admin');

var serviceAccount = {
    "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    "client_email": process.env.FIREBASE_CLIENT_EMAIL,
    "project_id": process.env.FIREBASE_PROJECT_ID
};

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: CONFIG.FIREBASE.DATABASE_URL
});
const fbData = admin.firestore();
module.exports = fbData;