import React, {useEffect} from 'react';
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

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  useEffect(() => {
    console.log("useEffect");
    const url_request = `http://localhost:4000/`;
    axios.get(url_request)
      .then(response => {
        console.log(response);
      })
  }, [])
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Table dataSource={dataSource} columns={columns} />;
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
