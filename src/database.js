const mysql = require('mysql');

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "test"
});

module.exports = () => {return connection};