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
    const url_request = `${DOMAIN}/api/workana/grafs_data`;
    // const url_request = `${DOMAIN}/api/workana`;
    axios.get(url_request)
      .then(response => {
        // console.log(response)
        const workana_jobs = response.data;
        const commerce = workana_jobs.filter(r => r.titulo.match(/commerce/gi)).length
        const scrap    = workana_jobs.filter(r => r.titulo.match(/scrap/gi)).length
        const laravel  = workana_jobs.filter(r => r.titulo.match(/laravel/gi)).length
        const python   = workana_jobs.filter(r => r.titulo.match(/python/gi)).length
        const rails    = workana_jobs.filter(r => r.titulo.match(/rails/gi)).length
        // console.log(commerce, scrap, laravel, python, rails)
        // console.log(workana_jobs)
        setData({
          labels: [
            'commerce', 'scrap', 'laravel', 'python', 'rails'
          ],
          datasets: [{
            data: [commerce, scrap, laravel, python, rails],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#8463FF',
            '#56CEFF',
            ],
            hoverBackgroundColor: [
            '#DF6384',
            '#06A2CB',
            '#DFCE56',
            '#6463FF',
            '#36CEFF',
            ]
          }]
        })
        // setWorkanaJobs( workana_jobs )
      })
  }, [])

  return (
    <>
      <h1 className="title">Cuentas</h1>
      <Doughnut data={data}/>
    </>
  );
}

export default WorkanaGrafs;