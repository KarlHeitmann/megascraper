import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { DOMAIN } from '../utils';
import { Doughnut } from 'react-chartjs-2';

function WorkanaGrafs(props) {
  const [data, setData] = useState({
    labels: [
      'Red',
      'Green',
      'Yellow'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }]
  })
  useEffect(() => {

    console.log("useEffect");
    const url_request = `${DOMAIN}/api/workana/filtrar_scraper`;
    // const url_request = `${DOMAIN}/api/workana`;
    axios.get(url_request)
      .then(response => {
        console.log(response)
        const workana_jobs = response.data;
        console.log(workana_jobs)
        // setWorkanaJobs( workana_jobs )
      })
  }, [])

  return (
    <>
      <h1>Work in progress</h1>
      <Doughnut data={data}/>
    </>
  );
}

export default WorkanaGrafs;