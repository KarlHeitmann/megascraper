import React, {useState} from 'react';
import {
  Button
} from 'antd';
import axios from 'axios';

function WorkanaJobs(props) {
  const [workana_jobs, setWorkanaJobs] = useState([])

  const onBtnScrape = () => {
    console.log("onBtnScrape")
    const url_request = `http://localhost:4000/workana/scrape`;
    axios.get(url_request)
      .then(response => {
        const { workana_jobs } = response.data;
        console.log(workana_jobs)
        setWorkanaJobs( workana_jobs )
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