import React from 'react';
import {
  Space,
  Button,
} from 'antd';
import axios from 'axios';
import { DOMAIN } from '../utils';


const workana_jobs_columns = [
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
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        {/* <a>Invite {record.url}</a> */}
        <Button onClick={() => {
            console.log("click")
            const url_request = `${DOMAIN}/api/workana/${record._id}`;
            axios.delete(url_request)
              .then(response => {
                console.log(response)
              })
          }}
          >Delete</Button>
        <Button onClick={() => {
            console.log("click")
            const url_request = `${DOMAIN}/api/workana/${record._id}`;
            axios.put(url_request, {deshabilitado: true})
              .then(response => {
                console.log(response)
              })
          }}
          >Deshabilitar</Button>
      </Space>
    ),
  },
];

export default workana_jobs_columns;