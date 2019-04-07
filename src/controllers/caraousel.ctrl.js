var PublicSpreadsheet = require("spreadsheet-sql").PublicSpreadsheet;
const path = require("path");
const HOMEDIR = path.join(__dirname, "..", "..");
const CONFIG = require(path.join(HOMEDIR, "config", "default"));
module.exports = {
    getImages: (req, res, next) => {
        var spreadsheet = new PublicSpreadsheet(
            CONFIG.GOOGLE_SHEET.CARAOUSEL.SHEET_ID,
            CONFIG.GOOGLE_SHEET.CARAOUSEL.SHEET_NAME
        );

        spreadsheet.query("SELECT A ").then(function(result) {
            console.log("Search" + JSON.stringify(result));
            res.status(200).send(result);
        });
    }
};
