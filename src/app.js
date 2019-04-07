const express = require("express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const fs = require("fs");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");
const app = express();
const router = express.Router();

const HOMEDIR = path.join(__dirname, "..");
const CONFIG = require(path.join(HOMEDIR, "config", "default"));
let port = CONFIG.APP.PORT || process.env.PORT;

/** set up middlewares */
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
app.use(expressValidator());



/** set up routes {API Endpoints} */
routes(router);

app.get("/mediakit",function(req,res){
  console.log("hi")
  var file = fs.createReadStream('./files/mediakit.pdf');
  file.pipe(res);

});

app.use("/api", router);

/** start server */
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
