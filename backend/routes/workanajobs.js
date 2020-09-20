const router = require('express').Router();
const workanaController = require('../controllers/workana');

router
	.route('/')
	.get(workanaController.findAll)
	.post(workanaController.create);

router
	.route('/:id')
	.get(workanaController.findById)
	.put(workanaController.update)
	.delete(workanaController.remove);

module.exports = router;
