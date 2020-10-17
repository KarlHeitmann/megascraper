const defaultOptions = {
  headers: {
    "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:63.0) Gecko/20100101 Firefox/63.0"
  },
  jar: true,
  encoding: null,
}
const request = require('request-promise').defaults(defaultOptions);
const cheerio = require('cheerio');
var iconv = require('iconv');                                                   


async function main() {
  const detail_url = 'https://www.yapo.cl/valparaiso/motos/honda_nc_750_74678773.htm?ca=6_s&oa=74678773&xsp=49';
  const result = await request.get(detail_url);

  var ic = new iconv.Iconv('iso-8859-1', 'utf-8');                              
  // var buf = ic.convert(body);                                                   
  var buf = ic.convert(result);                                                   
  var utf8String = buf.toString('utf-8'); 

  const $ = await cheerio.load(utf8String);
  // const $ = await cheerio.load(result, { decodeEntities: false });
  const descripcion = $('.description').text().trim();
  console.log(descripcion)
}

main();