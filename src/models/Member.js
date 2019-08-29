const connection = require('../database')();


const get = () => {
    return new Promise((resolve, reject) => {
        connection.query('select * from member', (error, result) => {
            if(error) reject(error);
            resolve(result);
        });
    });
}

const create = (name, description, group) => {
    let sql = 'INSERT INTO member SET member.member_id = NULL, member.member_name = ?, member.member_description = ?, member.group_id = (SELECT group_id FROM groups WHERE groups.group_id = ?)';
    const params = [name, description, group];
    return new Promise((resolve, reject) => {
        connection.query(sql, params, (error, result) => {
            if(error) reject(error);
            resolve(result);
        });
    });
}

module.exports = {
    get,
    create
}