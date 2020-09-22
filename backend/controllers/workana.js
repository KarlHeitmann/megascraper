// booksControllers.js
const WorkanaJob = require('../models/WorkanaJob');

// Defining all methods and business logic for routes

module.exports = {
	findAll: function(req, res) {
		WorkanaJob.find(req.query)
			.then(books => res.json(books))
			.catch(err => res.status(422).json(err));
	},
	findById: function(req, res) {
		WorkanaJob.findById(req.params.id)
			.then(book => res.json(book))
			.catch(err => res.status(422).json(err));
	},
	create: function(req, res) {
		WorkanaJob.create(req.body)
			.then(newBook => res.json(newBook))
			.catch(err => res.status(422).json(err));
	},
	update: function(req, res) {
		WorkanaJob.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(book => res.json(book))
			.catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
		WorkanaJob.findById({ _id: req.params.id })
			.then(book => book.remove())
			.then(allbooks => res.json(allbooks))
			.catch(err => res.status(422).json(err));
	},
	filtrarScraper: function(req, res) {
		WorkanaJob.filtrarScraper()
			.then(workana_jobs => res.json(workana_jobs))
	}
};