const path = require("path");
const MODELS = path.join(__dirname, "..");
const pool = require(path.join(MODELS, "models", "postgresProperties"));

module.exports = {
  getTeamMembers: (req, res, next) => {
    pool.query(
        "SELECT * from prusa_team",
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
