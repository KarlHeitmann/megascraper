import React from 'react';
import {
  Space,
  Button,
} from 'antd';

const autos_columns = [
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
    title: 'Precio',
    dataIndex: 'precio',
    key: 'precio',
  },
  {
    title: 'Url',
    dataIndex: 'url',
    key: 'url',
    render: (text, row, index) => {
      return <a href={text}>Ir</a>
    },
  }
]

export default autos_columns;