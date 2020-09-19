import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Layout,
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
      <Header>Header</Header>
      <Content>
        <Motos/>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
