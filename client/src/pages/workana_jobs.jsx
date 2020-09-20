import React, {useState} from 'react';
import {
  Table,
  Button,
} from 'antd';
import axios from 'axios';

import workana_jobs_columns from '../table_columnas/workana_jobs';

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
    <>
      <h1 className="title">Workana</h1>
      <Button
        type="primary"
        onClick={onBtnScrape}
        >
        Scrape
      </Button>
      <Table dataSource={workana_jobs} columns={workana_jobs_columns} />
    </>
  )
}

export default WorkanaJobs;