import React, {useEffect, useState} from 'react';
import {
  Table,
  Button,
} from 'antd';
import axios from 'axios';

function Motos(props) {
  const [motos, setMotos] = useState([]);
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
        // if (index < 4) {
        //   return <a>{text}</a>;
        // }
        // return {
        //   children: <a>{text}</a>,
        //   props: {
        //     colSpan: 5,
        //   },
        // };
      },
    },
    {
      title: 'precio',
      dataIndex: 'precio',
      key: 'precio',
      sortDirections: ['ascend', 'descend'],
      sorter: (a, b) => Number(a.precio) > Number(b.precio),
      render: (text, row, index) => {
        // let salida = []
        // let partida = true
        // for (let i=(text.length - 1); i>=0; i--) {
        //   if (partida) {
        //     partida = false
        //   } else {
        //     if ((i%3) == 0) {
        //       salida.unshift(".")
        //     }
        //   }
        //   salida.unshift(text[i])
        // }

        // return salida.join("");
        return text
      }
      
    },
    {
      title: 'Cilindrada',
      dataIndex: 'cilindrada',
      key: 'cilindrada',
      sortDirections: ['ascend', 'descend'],
      sorter: (a, b) => Number(a.cilindrada) > Number(b.cilindrada),
    },
    {
      title: 'Año',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: 'Kilometraje',
      dataIndex: 'kilometraje',
      key: 'kilometraje',
    },
    {
      title: 'Ciudad',
      dataIndex: 'ciudad',
      key: 'ciudad',
    },
    {
      title: 'Fecha',
      dataIndex: 'fecha',
      key: 'fecha',
    },
    {
      title: 'Descripciòn',
      dataIndex: 'descripcion',
      key: 'descripcion',
    },
  ];

  useEffect(() => {
    console.log("useEffect");
    const url_request = `http://localhost:4000/`;
    axios.get(url_request)
      .then(response => {
        const { motos } = response.data;
        console.log(motos)
        setMotos( motos )
      })
  }, [])

  const onBtnScrape = () => {
    console.log("onBtnScrape")
    const url_request = `http://localhost:4000/motos/scrape`;
    axios.get(url_request)
      .then(response => {
        const { motos } = response.data;
        console.log(motos)
        setMotos( motos )
      })
  }

  return(
    <>
      <Button
        type="primary"
        onClick={onBtnScrape}
        >
        Scrape
      </Button>
      <Table dataSource={motos} columns={columns} />
    </>
  )
}

export default Motos;