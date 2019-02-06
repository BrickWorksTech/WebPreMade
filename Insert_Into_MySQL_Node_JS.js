var mysql = require('mysql');

var con = mysql.createConnection({
  host: "192.168.0.100",
  user: "usrName",
  password: "pswd",
  database: "dbName"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO tableName (ID, data1, data2) VALUES ('123', 'd1','d2')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("succsess");
  });
});