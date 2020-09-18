import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Layout,
  Table,
} from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const {
  Footer,
  Content,
  Header,
} = Layout;

function App() {

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
    },
    {
      title: 'precio',
      dataIndex: 'precio',
      key: 'precio',
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
    {
      title: 'Cilindrada',
      dataIndex: 'cilindrada',
      key: 'cilindrada',
    },
  ];

  useEffect(() => {
    console.log("useEffect");
    const url_request = `http://localhost:4000/`;
    axios.get(url_request)
      .then(response => {
        console.log(response);
        const { motos } = response.data;
        console.log(motos)
        setMotos( motos )
      })
  }, [])
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Table dataSource={motos} columns={columns} />;
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
