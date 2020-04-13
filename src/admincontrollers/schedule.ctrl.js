const path = require("path");
const MODELS = path.join(__dirname, "..");
const db = require(path.join(MODELS, "models", "firebaseProperties"));
const HOMEDIR = path.join(__dirname, "..", "..");
const CONFIG = require(path.join(HOMEDIR, "config", "default"));
const admin = require('firebase-admin');
function formatTime(show,callback){
    start_time_hours=parseInt(show['start_time'].substr(0,2));
    start_time_minutes=parseInt(show['start_time'].substr(2,3));
    end_time_hours=parseInt(show['end_time'].substr(0,2));
    end_time_minutes=parseInt(show['end_time'].substr(2,3));
    var start_time = new Date(2020,1,1,start_time_hours,start_time_minutes);
    var end_time = new Date(2020,1,1,end_time_hours,end_time_minutes);
    let startTime=admin.firestore.Timestamp.fromDate(start_time);
    let endTime=admin.firestore.Timestamp.fromDate(end_time);
    callback(startTime,endTime);
}
module.exports = {
    scheduleMonday: (req, res, next) => {
      let docRef = db.collection(CONFIG.FIREBASE.COLLECTION.MONDAY);
      let data=req.body;

      data.forEach((show,index) => {
            formatTime(show,function(startTime,endTime){
                data[index]={show,time:{startTime:startTime,endTime:endTime}};
                docRef.add({show,time:{startTime:startTime,endTime:endTime}});
            })
        });
      res.status(201).send();
    },
    scheduleTuesday: (req, res, next) => {
        let docRef = db.collection(CONFIG.FIREBASE.COLLECTION.TUESDAY);
        let data=req.body;
        count=0;
        data.forEach((show,index) => {
            formatTime(show,function(startTime,endTime){
                data[index]={show,time:{startTime:startTime,endTime:endTime}};
                docRef.add({show,time:{startTime:startTime,endTime:endTime}});
                count++;
            })
        });
        console.log(count)
        res.status(201).send();
    },
    scheduleWednesday: (req, res, next) => {
        let docRef = db.collection(CONFIG.FIREBASE.COLLECTION.WEDNESDAY);
        let data=req.body;
        count=0;
        data.forEach((show,index) => {
            formatTime(show,function(startTime,endTime){
                data[index]={show,time:{startTime:startTime,endTime:endTime}};
                docRef.add({show,time:{startTime:startTime,endTime:endTime}});
                count++;
            })
        });
        console.log(count)
        res.status(201).send();
    },
    scheduleThursday: (req, res, next) => {
        let docRef = db.collection(CONFIG.FIREBASE.COLLECTION.THURSDAY);
        let data=req.body;
        count=0;
        data.forEach((show,index) => {
            formatTime(show,function(startTime,endTime){
                data[index]={show,time:{startTime:startTime,endTime:endTime}};
                docRef.add({show,time:{startTime:startTime,endTime:endTime}});
                count++;
            })
        });
        console.log(count)
        res.status(201).send();
    },
    scheduleFriday: (req, res, next) => {
        let docRef = db.collection(CONFIG.FIREBASE.COLLECTION.FRIDAY);
        let data=req.body;
        count=0;
        data.forEach((show,index) => {
            formatTime(show,function(startTime,endTime){
                data[index]={show,time:{startTime:startTime,endTime:endTime}};
                docRef.add({show,time:{startTime:startTime,endTime:endTime}});
                count++;
            })
        });
        console.log(count)
        res.status(201).send();
    },
    scheduleSaturday: (req, res, next) => {
        let docRef = db.collection(CONFIG.FIREBASE.COLLECTION.SATURDAY);
        let data=req.body;
        count=0;
        data.forEach((show,index) => {
            formatTime(show,function(startTime,endTime){
                data[index]={show,time:{startTime:startTime,endTime:endTime}};
                docRef.add({show,time:{startTime:startTime,endTime:endTime}});
                count++;
            })
        });
        console.log(count)
        res.status(201).send();
    },
    scheduleSunday: (req, res, next) => {
        let docRef = db.collection(CONFIG.FIREBASE.COLLECTION.SUNDAY);
        let data=req.body;
        count=0;
        data.forEach((show,index) => {
            formatTime(show,function(startTime,endTime){
                data[index]={show,time:{startTime:startTime,endTime:endTime}};
                docRef.add({show,time:{startTime:startTime,endTime:endTime}});
                count++;
            })
        });
        console.log(count)
        res.status(201).send();
    }
};
