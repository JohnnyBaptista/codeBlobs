const connection = require('../database')();

const get = () => {
	return new Promise((resolve, reject) => {
		connection.query('select * from type', (error, result) => {
			if(error) reject(error);
			resolve(result);
		});
	});
}

const create = (type) =>{
	return new Promise((resolve, reject) => {
		let sql = `INSERT INTO type SET type_id = NULL, type.type_name = ?`;
		connection.query(sql, type, (error, result) => {
			if(error) reject(error);
			resolve(result);
		});
	});
}

module.exports = { 
	get, 
	create
};