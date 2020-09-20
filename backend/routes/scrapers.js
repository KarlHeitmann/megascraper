const router = require('express').Router();
const yapo_motos = require('../scrapers/yapo_motos');
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

router.route('/workana').get(scrapersController.workana)

router.route("/motos").get(async(req, res, next) => {
  const motos_url = await yapo_motos.extraerUrlsPagina();
  const motos = await yapo_motos.scrapeDetailUrls(motos_url);
  yapo_motos.insertYapoMotoInMongoDb(motos)
  res.send({motos})
})

module.exports = router;
