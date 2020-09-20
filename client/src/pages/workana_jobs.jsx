import React, {useState} from 'react';
import {
  Table,
  Button,
} from 'antd';
import axios from 'axios';

function WorkanaJobs(props) {
  const [workana_jobs, setWorkanaJobs] = useState([])
  const columns = [
    {
      title: 'Titulo',
      dataIndex: 'titulo',
      key: 'titulo',
    },
    {
      title: 'URL',
      dataIndex: 'url',
      key: 'url',
      render: (text, row, index) => {
        return <a href={text}>Ir</a>
      },
    },
    {
      title: 'Fecha publicación',
      dataIndex: 'fecha_publicacion',
      key: 'fecha_publicacion',
    },
    {
      title: 'Precio',
      dataIndex: 'precio',
      key: 'precio',
    },
    {
      title: 'Propuestas',
      dataIndex: 'propuestas',
      key: 'propuestas',
    },
    {
      title: 'Descripción',
      dataIndex: 'descripcion',
      key: 'descripcion',
    },
    {
      title: 'Deadline',
      dataIndex: 'deadline',
      key: 'deadline',
    },
  ]

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
      <Table dataSource={workana_jobs} columns={columns} />
    </>
  )
}

export default WorkanaJobs;