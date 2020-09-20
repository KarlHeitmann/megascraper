// booksControllers.js
const YapoMoto = require('../models/YapoMoto');

// Defining all methods and business logic for routes

module.exports = {
	findAll: function(req, res) {
		YapoMoto.find(req.query)
			.then(books => res.json(books))
			.catch(err => res.status(422).json(err));
	},
	findById: function(req, res) {
		YapoMoto.findById(req.params.id)
			.then(book => res.json(book))
			.catch(err => res.status(422).json(err));
	},
	create: function(req, res) {
		YapoMoto.create(req.body)
			.then(newBook => res.json(newBook))
			.catch(err => res.status(422).json(err));
	},
	update: function(req, res) {
		YapoMoto.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(book => res.json(book))
			.catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
		YapoMoto.findById({ _id: req.params.id })
			.then(book => book.remove())
			.then(allbooks => res.json(allbooks))
			.catch(err => res.status(422).json(err));
	}
};
