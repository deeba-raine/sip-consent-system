const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
});

pool.query("SELECT 1")
.then(()=> {console.log("database is connected successfully")})
.catch(err=> {console.log("db connection faild /n" + err)})

module.exports = pool;