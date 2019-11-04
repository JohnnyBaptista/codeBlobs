const Attendance = require('../models/Attendance');

module.exports = {
    async index(req, res) {
        const result = await Attendance.get();
        return res.json(result);
    },

    async store(req, res) {
        const { member, meet, period } = req.body;
        const attendance = await Attendance.create(member, meet, period);
        return res.json(attendance);
    },

    async att(req, res) {
        const { group_id } = req.params;
        const meetMember = await Attendance.getMeetsMembers(group_id);
        let nmb = meetMember[0][0].meetNumber;
        const dataArray = [];
        for(let data of meetMember[1]){
            let memberAttNumber = await Attendance.getMemberAttendenceNumber(data.member_id);
            let memberPercentage = (memberAttNumber[0].att)/nmb;
            dataArray.push({
                member_id: data,
                memberPercentage,
            });
        }

        return res.json(dataArray);

        
    }
}