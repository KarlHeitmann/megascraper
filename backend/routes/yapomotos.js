const router = require('express').Router();
const yapomotosController = require('../controllers/yapomotos');

router
	.route('/')
	.get(yapomotosController.findAll)
	.post(yapomotosController.create);

router
	.route('/:id')
	.get(yapomotosController.findById)
	.put(yapomotosController.update)
	.delete(yapomotosController.remove);

module.exports = router;

