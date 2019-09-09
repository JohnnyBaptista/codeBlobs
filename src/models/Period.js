const connection = require('../database')();


const get = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM period', (error, result) => {
            if(error) reject(error);
            resolve(result);
        });
    });
}

const create = (name, time) => {
    let sql = 'INSERT INTO period SET period.period_name = ?, period.period_h = ?';
    const params = [name, time];
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