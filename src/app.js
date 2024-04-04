const express = require("express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const fs = require("fs");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");
var forceSsl = require('force-ssl-heroku');
// const adminRoutes = require("./routes/adminRoutes");
const app = express();
const router = express.Router();

const HOMEDIR = path.join(__dirname, "..");
app.get("/mediakit",function(req,res,next){
  res.download('./files/mediakit.pdf');
});
app.use(forceSsl);
app.use(express.static(path.join(HOMEDIR, 'build')));
const CONFIG = require(path.join(HOMEDIR, "config", "default"));
let port = process.env.PORT || CONFIG.APP.PORT;
app.get('/', function(req, res) {
  res.sendFile(path.join(HOMEDIR, 'build', 'index.html'));
});
app.get('/schedule', function(req, res) {
  res.sendFile(path.join(HOMEDIR, 'build', 'index.html'));
});
app.get('/team', function(req, res) {
  res.sendFile(path.join(HOMEDIR, 'build', 'index.html'));
});
app.get('/advertise', function(req, res) {
  res.sendFile(path.join(HOMEDIR, 'build', 'index.html'));
});
app.get('/about', function(req, res) {
  res.sendFile(path.join(HOMEDIR, 'build', 'index.html'));
});
app.get('/contact', function(req, res) {
  res.sendFile(path.join(HOMEDIR, 'build', 'index.html'));
});
app.get('/listen', function(req, res) {
  res.sendFile(path.join(HOMEDIR, 'build', 'index.html'));
});
app.get('/privacy', function(req, res) {
  res.sendFile(path.join(HOMEDIR, 'build', 'index.html'));
});
/** set up middlewares */
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
app.use(expressValidator());



/** set up routes {API Endpoints} */
routes(router);
// adminRoutes(router);


app.use("/api", router);
// app.use("/admin", router);
/** start server */

app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
