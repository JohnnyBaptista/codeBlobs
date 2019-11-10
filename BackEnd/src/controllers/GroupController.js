const Group = require('../models/Group');

module.exports = {
	async index(req, res) {
		const result = await Group.get();
		return res.json(result);
	},

	async store(req, res) {
		const { name, type } = req.body;

		const group = await Group.create(name, type);

		return res.json(group); 
	}
}