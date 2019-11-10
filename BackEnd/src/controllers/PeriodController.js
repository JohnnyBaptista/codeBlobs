const Period = require('../models/Period');

module.exports = {
	async index(req, res) {
		const result = await Period.get();
		return res.json(result);
	},

	async store(req, res) {
		const { name, time } = req.body;

		const period = await Period.create(name, time);

		return res.json(period); 
	}
}