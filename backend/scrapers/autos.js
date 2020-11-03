const request = require('request-promise');
const cheerio = require('cheerio');
const moment = require('moment');

const INDEX_URL = 'https://autos.mercadolibre.cl/';

async function index() {
  const result = await request.get(INDEX_URL);
  const $ = await cheerio.load(result);
  const SELECTOR = 'section.ui-search-results > ol > li.ui-search-layout__item'
  const autos = []
  $(SELECTOR).each((index, element) => {
    const auto = {}
    // console.log(element);
    // console.log($(element).find('div.ui-search-item__group ui-search-item__group--price').text())
    const precio = $(element).find('.price-tag-fraction').text();
    auto.precio = precio;
    const atributo = $(element).find('.ui-search-card-attributes.ui-search-item__group__element');
    const lis = $(atributo).find('li');
    auto.year = $(lis[0]).text();
    auto.kilometraje = $(lis[1]).text();
    console.log(auto);
  })
  return autos;
}

module.exports = {
  index,
}