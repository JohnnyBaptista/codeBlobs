const Type = require('../models/Type');

module.exports = {
	async index(req, res) {
		const result = await Type.get();
		return res.json(result);
	},

	async store(req, res) {
		const { type } = req.body;

		const result = await Type.create(type);

		return res.json(result);
	}

}