import React from 'react';

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
];

export default workana_jobs_columns;