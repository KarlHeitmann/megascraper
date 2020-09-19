import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Layout,
  Menu,
} from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Motos from './pages/motos';

const {
  Footer,
  Content,
  Header,
} = Layout;

function App() {

  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Motos</Menu.Item>
          <Menu.Item key="2">Workana</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Motos/>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
