const express = require("express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const fs = require("fs");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");
// const adminRoutes = require("./routes/adminRoutes");
const app = express();
const router = express.Router();


const HOMEDIR = path.join(__dirname, "..");
app.get("/mediakit",function(req,res,next){
  res.download('./files/mediakit.pdf');
});
app.use(express.static(path.join(HOMEDIR, 'build')));
const CONFIG = require(path.join(HOMEDIR, "config", "default"));
let port = CONFIG.APP.PORT || process.env.PORT;
app.get('/', function(req, res) {
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
