const path = require("path");
const MODELS = path.join(__dirname, "..");
const pool = require(path.join(MODELS, "models", "scheduleProperties"));

module.exports = {
  currentShow: (req, res, next) => {
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    var date = new Date();
    var current_hour = date.getHours() - 8;
    var current_minute = date.getMinutes();

    console.log(current_hour);
    console.log(current_minute);
    day = days[date.getDay()];
    if (current_hour < 12) daytime = "AM";
    else {
      daytime = "PM";
      current_hour = current_hour - 12;
    }
    time = current_hour + ":" + current_minute + " " + daytime;
    console.log(time + day);
    pool.query(
      "SELECT (prusa_show_name as radio_show, is_live as live, is_repeat as repeat) from prusa_schedule where prusa_show_day=$1 and start_time<=$2 and end_time>=$2",
      [day, time],
      function(err, result) {
        if (err) {
          console.log(err);
          res.status(400).send(err);
        }
        console.log("Result" + result.rows);
        res.status(200).send(result.rows[0]);
      }
    );
  },
  scheduleMonday: (req, res, next) => {
    pool.query(
      "SELECT prusa_show_name as radio_show,start_time as time  from prusa_schedule where prusa_show_day='Mon'",
      function(err, result) {
        if (err) {
          console.log(err);
          res.status(400).send(err);
        }
        res.status(200).send(result.rows);
      }
    );
  },

  scheduleTuesday: (req, res, next) => {
    pool.query(
      "SELECT prusa_show_name as radio_show,start_time as time from prusa_schedule where prusa_show_day='Tue'",
      function(err, result) {
        if (err) {
          console.log(err);
          res.status(400).send(err);
        }
        res.status(200).send(result.rows);
      }
    );
  },

  scheduleWednesday: (req, res, next) => {
    pool.query(
      "SELECT prusa_show_name as radio_show,start_time as time from prusa_schedule where prusa_show_day='Wed'",
      function(err, result) {
        if (err) {
          console.log(err);
          res.status(400).send(err);
        }
        res.status(200).send(result.rows);
      }
    );
  },
  scheduleThursday: (req, res, next) => {
    pool.query(
      "SELECT prusa_show_name as radio_show,start_time as time from prusa_schedule where prusa_show_day='Thu'",
      function(err, result) {
        if (err) {
          console.log(err);
          res.status(400).send(err);
        }
        res.status(200).send(result.rows);
      }
    );
  },

  scheduleFriday: (req, res, next) => {
    pool.query(
      "SELECT prusa_show_name as radio_show,start_time as time from prusa_schedule where prusa_show_day='Fri'",
      function(err, result) {
        if (err) {
          console.log(err);
          res.status(400).send(err);
        }
        res.status(200).send(result.rows);
      }
    );
  },

  scheduleSaturday: (req, res, next) => {
    pool.query(
      "SELECT prusa_show_name as radio_show,start_time as time from prusa_schedule where prusa_show_day='Sat'",
      function(err, result) {
        if (err) {
          console.log(err);
          res.status(400).send(err);
        }
        res.status(200).send(result.rows);
      }
    );
  },

  scheduleSunday: (req, res, next) => {
    pool.query(
      "SELECT prusa_show_name as radio_show,start_time as time from prusa_schedule where prusa_show_day='Sun'",
      function(err, result) {
        if (err) {
          console.log(err);
          res.status(400).send(err);
        }
        res.status(200).send(result.rows);
      }
    );
  }
};
