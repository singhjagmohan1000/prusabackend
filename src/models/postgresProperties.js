const path = require("path");
const HOMEDIR = path.join(__dirname, "..", "..");
const { Pool } = require("pg");
const CONFIG = require(path.join(HOMEDIR, "config", "default"));
const POSTGRES_CONFIG = {
  user: CONFIG.DB.POSTGRES_USER,
  host: CONFIG.DB.POSTGRES_HOST,
  port: CONFIG.DB.POSTGRES_PORT,
  database: CONFIG.DB.POSTGRES_DB,
  password: CONFIG.DB.POSTGRES_PASS
};
const pool = new Pool(POSTGRES_CONFIG);
module.exports = pool;
