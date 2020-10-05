const {
  main
} = require('./backend/scrapers/infosubvenciones');

async function launcher() {
  const results = await main();
  console.log(results)
}

launcher();
