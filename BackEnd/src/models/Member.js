const connection = require('../database')();


const get = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM member', (error, result) => {
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

const upd = (id, name, description, group) => {
    let sql = `CALL UPD_MEMBER(?, ?, ?, ?)`;
    const params = [id, name, description, group];
    connection.query(sql, params, (error, results, fields) => {
        if(error) reject(error);
        resolve(result);
    });
}

module.exports = {
    get,
    create,
    upd
}