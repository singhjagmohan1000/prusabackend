const path = require("path");
const MODELS = path.join(__dirname, "..");
const db = require(path.join(MODELS, "models", "firebaseProperties"));
const HOMEDIR = path.join(__dirname, "..", "..");
const CONFIG = require(path.join(HOMEDIR, "config", "default"));
const admin = require('firebase-admin');
var map = new Map();
var result={};
async function getStartShow(req, res,callback){
    var days = [CONFIG.FIREBASE.COLLECTION.SUNDAY,CONFIG.FIREBASE.COLLECTION.MONDAY, CONFIG.FIREBASE.COLLECTION.TUESDAY, CONFIG.FIREBASE.COLLECTION.WEDNESDAY, CONFIG.FIREBASE.COLLECTION.THURSDAY, CONFIG.FIREBASE.COLLECTION.FRIDAY, CONFIG.FIREBASE.COLLECTION.SATURDAY];

    var result=[]
    var date = new Date();
    var current_hour = date.getHours();
    var current_minute = date.getMinutes();
    var date1 = new Date(2020,1,1,current_hour,current_minute);
    let currentTime=admin.firestore.Timestamp.fromDate(date1);
    let day = days[date.getDay()];
    let docRef = db.collection(day);
    await docRef.where('time.startTime','<=',currentTime).get()
        .then(snapshot => {
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }
            count=0;
            snapshot.forEach(doc => {
                map.set(JSON.stringify(doc.data()),0);
                count++;
            });


        })
        .catch(err => {
            console.log(err);
            return;
        });

    await docRef.where('time.endTime','>=',currentTime).get()
        .then(snapshot => {
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }
            count=0;
            console.log(map)

            snapshot.forEach(doc => {
                console.log(map.has(JSON.stringify(doc.data())));
                if(map.has(JSON.stringify(doc.data()))){
                    result= doc.data();
                }
                count++;
            });

            console.log(result)
           callback(result);
        })
        .catch(err => {
            console.log(err);
            return;
        });
}

module.exports = {
  currentShow:  (req, res, next) => {

        getStartShow(req,res,function(response){
            console.log(response)
            res.status(201).send(response.show);
        });
  },
    scheduleMonday: (req, res, next) => {
        let docRef = db.collection(CONFIG.FIREBASE.COLLECTION.MONDAY);
        var result=[];
        let query = docRef.get()
            .then(snapshot => {
                if (snapshot.empty) {
                    console.log('No matching documents.');
                    res.status(404).send();
                }
                count=0
                snapshot.forEach(doc => {

                    result.push(doc.data().show);
                    count++;
                });
                console.log(count)
                res.status(200).send(result);
            })
            .catch(err => {
                console.log(err);
                res.status(503).send();
            });
    },
    scheduleTuesday: (req, res, next) => {
        let docRef = db.collection(CONFIG.FIREBASE.COLLECTION.TUESDAY);
        var result=[];
        let query = docRef.get()
            .then(snapshot => {
                if (snapshot.empty) {
                    console.log('No matching documents.');
                    res.status(404).send();
                }
                count=0
                snapshot.forEach(doc => {

                    result.push(doc.data().show);
                    count++;
                });
                console.log(count)
                res.status(200).send(result);
            })
            .catch(err => {
                console.log(err);
                res.status(503).send();
            });
    },
    scheduleWednesday: (req, res, next) => {
        let docRef = db.collection(CONFIG.FIREBASE.COLLECTION.WEDNESDAY);
        var result=[];
        let query = docRef.get()
            .then(snapshot => {
                if (snapshot.empty) {
                    console.log('No matching documents.');
                    res.status(404).send();
                }
                count=0
                snapshot.forEach(doc => {

                    result.push(doc.data().show);
                    count++;
                });
                console.log(count)
                res.status(200).send(result);
            })
            .catch(err => {
                console.log(err);
                res.status(503).send();
            });
    },
    scheduleThursday: (req, res, next) => {
        let docRef = db.collection(CONFIG.FIREBASE.COLLECTION.THURSDAY);
        var result=[];
        let query = docRef.get()
            .then(snapshot => {
                if (snapshot.empty) {
                    console.log('No matching documents.');
                    res.status(404).send();
                }
                count=0
                snapshot.forEach(doc => {

                    result.push(doc.data().show);
                    count++;
                });
                console.log(count)
                res.status(200).send(result);
            })
            .catch(err => {
                console.log(err);
                res.status(503).send();
            });
    },
    scheduleFriday: (req, res, next) => {
        let docRef = db.collection(CONFIG.FIREBASE.COLLECTION.FRIDAY);
        var result=[];
        let query = docRef.get()
            .then(snapshot => {
                if (snapshot.empty) {
                    console.log('No matching documents.');
                    res.status(404).send();
                }
                count=0
                snapshot.forEach(doc => {

                    result.push(doc.data().show);
                    count++;
                });
                console.log(count)
                res.status(200).send(result);
            })
            .catch(err => {
                console.log(err);
                res.status(503).send();
            });
    },
    scheduleSaturday: (req, res, next) => {
        let docRef = db.collection(CONFIG.FIREBASE.COLLECTION.SATURDAY);
        var result=[];
        let query = docRef.get()
            .then(snapshot => {
                if (snapshot.empty) {
                    console.log('No matching documents.');
                    res.status(404).send();
                }
                count=0
                snapshot.forEach(doc => {

                    result.push(doc.data().show);
                    count++;
                });
                console.log(count)
                res.status(200).send(result);
            })
            .catch(err => {
                console.log(err);
                res.status(503).send();
            });
    },
    scheduleSunday: (req, res, next) => {
        let docRef = db.collection(CONFIG.FIREBASE.COLLECTION.SUNDAY);
        var result=[];
        let query = docRef.get()
            .then(snapshot => {
                if (snapshot.empty) {
                    console.log('No matching documents.');
                    res.status(404).send();
                }
                count=0
                snapshot.forEach(doc => {

                    result.push(doc.data().show);
                    count++;
                });
                console.log(count)
                res.status(200).send(result);
            })
            .catch(err => {
                console.log(err);
                res.status(503).send();
            });
    }
};
