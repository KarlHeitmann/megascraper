const router = require('express').Router();
const scrapersController = require('../controllers/scrapers');

// router
// 	.route('/')
// 	.get(workanaController.findAll)
// 	.post(workanaController.create);

// router
// 	.route('/:id')
// 	.get(workanaController.findById)
// 	.put(workanaController.update)
// 	.delete(workanaController.remove);

router.route('/workana').get(scrapersController.workana);

router.route('/extra').get(scrapersController.infosubvenciones);

router.route("/motos").get(scrapersController.motos);

router.route("/autos").get(scrapersController.autos);

module.exports = router;
