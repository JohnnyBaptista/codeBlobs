const Attendance = require('../models/Attendance');

module.exports = {
    async index(req, res) {
        const result = await Attendance.get();
        return res.json(result);
    },

    async store(req, res) {
        const {member, meet, period} = req.body;
        const attendance = await Attendance.create(member, meet, period);
        return res.json(attendance);
    }
}