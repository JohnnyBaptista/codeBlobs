const connection = require('../database')();

const get = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM attendance', (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    });
}

const create = (member, meet, period) => {
    const sql = 'INSERT INTO attendance SET attendance.att_id = NULL, attendance.member_id = (SELECT member_id FROM member WHERE member.member_id = ?), attendance.meet_id = (SELECT meet_id FROM meet WHERE meet.meet_id = ?), attendance.period_id = (SELECT period_id FROM period WHERE period.period_id = ?)';
    const params = [member, meet, period];
    return new Promise((resolve, reject) => {
        connection.query(sql, params, (error, result) => {
            if(error) reject(error);
            resolve(result);
        });
    });
}

const getMeetsMembers = async (group_id) => {
    const groupMeetsSql = 'SELECT COUNT(*) as meetNumber FROM meet WHERE group_id = ?';
    const memberSql = 'SELECT member_id FROM member WHERE group_id = ?';
    const groupMeets = new Promise((resolve, reject) => {
        connection.query(groupMeetsSql, group_id, (error, result) => {
            if(error) reject(error);
            resolve(result);
        });
    });
    const members = new Promise((resolve, reject) => {
        connection.query(memberSql, group_id, (error, result) => {
            if(error) reject(error);
            resolve(result);
        });
    });
    const dataObj = await Promise.all([groupMeets, members]);
    return dataObj;
}

const getMemberAttendenceNumber = (member_id) => {
    const sql = 'SELECT COUNT(*) AS att FROM attendance WHERE member_id = ?';
    return new Promise ((resolve, reject) => {
        connection.query(sql, member_id, (error, result) => {
            if(error) reject(error);
            resolve(result);
        });
    });
} 

module.exports = {
    get,
    create,
    getMeetsMembers,
    getMemberAttendenceNumber
}