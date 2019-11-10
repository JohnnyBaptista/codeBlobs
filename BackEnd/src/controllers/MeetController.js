const Meet = require('../models/Meet');

module.exports = {
	async index(req, res) {
		const result = await Meet.get();
		return res.json(result);
	},

	async store(req, res) {
		const { description, group } = req.body;

		const meet = await Meet.create(description, group);

		return res.json(meet); 
	}
}