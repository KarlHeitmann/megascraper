import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import {
  Layout,
  Menu,
} from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Motos from './pages/motos';

const {
  Footer,
  Content,
  Header,
  Sider,
} = Layout;

function App() {
  console.log(useLocation.pathname)
  return (
    <Router>
      <Layout>
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
        <Layout>
        <Sider>
          <Switch>
            <Route path="/">
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                >
                <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </Menu.SubMenu>
              </Menu>
            </Route>
          </Switch>
        </Sider>
        <Content>
          <Switch>
            <Route path="/">
              {/* <Motos/> */}
            </Route>
          </Switch>
        </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </Router>
  );
}

export default App;
