const connection = require('../database')();

const get = () => {
	return new Promise((resolve, reject) => {
		connection.query('SELECT * FROM meet', (error, result) => {
			if(error) reject(error);
			resolve(result);
		});
	});
}

const create = (description, group) => {
	const sql = 'INSERT INTO meet SET meet.meet_id = NULL, meet.meet_description = ?, meet.group_id = (SELECT group_id FROM groups WHERE groups.group_id = ?)';
	const params = [description, group];
	return new Promise((resolve, reject) => {
		connection.query(sql, params, (error, result) => {
			if(error) reject(error);
			resolve(result);
		});
	});
}


module.exports = { 
	get, 
	create,
};