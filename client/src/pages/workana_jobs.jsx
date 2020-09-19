import React from 'react';
import {
  Button
} from 'antd';

function WorkanaJobs(props) {

  const onBtnScrape = () => {
    console.log("onBtnScrape")
    const url_request = `http://localhost:4000/workana/scrape`;
    axios.get(url_request)
      .then(response => {
        const { motos } = response.data;
        console.log(motos)
        setMotos( motos )
      })
  }

  return(
    <Button
      type="primary"
      onClick={onBtnScrape}
      >
      Scrape
    </Button>
  )
}

export default WorkanaJobs;