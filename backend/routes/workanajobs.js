const router = require('express').Router();
const workanaController = require('../controllers/workana');
const bodyParser = require('body-parser')
let jsonParser = bodyParser.json()


router
	.route('/')
	.get(workanaController.findAll)
	.post(workanaController.create);

router
	.route('/filtrar_scraper')
	.get(workanaController.filtrarScraper);

router
	.route('/:id')
	.get(workanaController.findById)
	.put(jsonParser, workanaController.update)
	.delete(workanaController.remove);


module.exports = router;
