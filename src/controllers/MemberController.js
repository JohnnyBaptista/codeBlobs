const Member = require('../models/Member');

module.exports = {
	async index(req, res) {
		const result = await Member.get();
		return res.json(result);
	},

	async store(req, res) {
		const { name, description, group } = req.body;

		const result = await Member.create(name, description, group);

		return res.json(result);
	}

}