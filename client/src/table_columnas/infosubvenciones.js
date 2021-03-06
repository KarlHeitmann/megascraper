import React from 'react';
import {
  Space,
  Button,
} from 'antd';

const infosubvenciones_columns = [
  {
    title: 'detalles',
    dataIndex: 'url',
    key: '0',
    render: (text, row, index) => {
      const url_path = `https://www.infosubvenciones.es/bdnstrans/GE/es/convocatoria/${row[7]}`
      return <a href={url_path}>{url_path}</a>
    }
  },
  {
    title: 'Administracion',
    dataIndex: '1',
    key: '1',
  },
  {
    title: 'Departamento',
    dataIndex: '2',
    key: '2',
  },
  {
    title: 'Órgano',
    dataIndex: '3',
    key: '3',
  },
  {
    title: 'Fecha de Registro',
    dataIndex: '4',
    key: '4',
  },
  {
    title: 'Título de la convocatoria',
    dataIndex: '5',
    key: '5',
  },
  {
    title: 'BB Reguladoras',
    dataIndex: '6',
    key: '6',
  },
  {
    title: 'ID BDNS',
    dataIndex: '7',
    key: '7',
  }
]

export default infosubvenciones_columns;