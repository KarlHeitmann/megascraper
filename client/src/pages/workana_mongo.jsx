import React, {useEffect, useState} from 'react';
import {
  Table,
} from 'antd';
import axios from 'axios';

import workana_jobs_columns from '../table_columnas/workana_jobs';

function WorkanaMongo(props) {
  const [workana_jobs, setWorkanaJobs] = useState([])
  useEffect(() => {

    console.log("useEffect");
    const url_request = `http://localhost:4000/workana/index`;
    axios.get(url_request)
      .then(response => {
        console.log(response)
        const { workana_jobs } = response.data;
        console.log(workana_jobs)
        setWorkanaJobs( workana_jobs )
      })
  }, [])


  return (
    <>
      <h1 className="title">Workana Mongo</h1>
      <Table dataSource={workana_jobs} columns={workana_jobs_columns} />
    </>
  );
};

export default WorkanaMongo;