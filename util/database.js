const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "notesens",
  password: "lol1lol2lol3",
});

module.exports = pool.promise();