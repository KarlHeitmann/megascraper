let request = require("request-promise");
const fs = require('fs')
const cookieJar = request.jar();
request = request.defaults({jar: cookieJar, strictSSL: false});

// const root_url = 'https://www.infosubvenciones.es/bdnstrans/GE/es/index'
const root_url = 'https://www.infosubvenciones.es/bdnstrans/GE/es/index'

async function main() {
  const result = await request.get(root_url);
  // const result = await request.get({ url: root_url, strictSSL: false});
  const cookieString = cookieJar.getCookieString(root_url)
  console.log(cookieString)
  const splittedByScrfCookieName = cookieString.split("JSESSIONID=")
  const JSESSIONID = splittedByScrfCookieName[1].split(";")[0];
  console.log(JSESSIONID)
  const data_url = 'https://www.infosubvenciones.es/bdnstrans/busqueda?type=topconv&_search=false&nd=1601915599703&rows=50&page=2&sidx=4&sord=desc'
  var headers = {
    'Cookie': `JSESSIONID=${JSESSIONID};`
  };
  const data_result = await request.get({headers: headers, url: data_url})
  console.log(data_result)
  /*

  const loginResult = await request.post("https://internshala.com/login/verify_ajax/user", {
    form: {
      csrf_test_name,
      email: "brennan.vir@intrees.org",
      password: "kwrqt6W$",
    }
  });
  console.log("\n\n========:4::::::::::==========::::::::::\n\n");
  const matches = await request.get(
    "https://internshala.com/internships/matching-preferences"
  );
  fs.writeFileSync("./matches.html", matches);
  console.log(loginResult);
  */
}


main();
