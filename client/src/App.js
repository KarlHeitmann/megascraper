import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
      <Router>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">Motos</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/workana">Workana</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Switch>
            <Route path="/">
              <Motos/>
            </Route>
          </Switch>
        </Content>
      </Router>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
