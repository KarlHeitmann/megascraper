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
import Motos from './pages/motos';
import MotosSidebar from './sidebar/motos_sidebar';
import WorkanaJobs from './pages/workana_jobs';
import WorkanaSidebar from './sidebar/workana_sidebar';
import WorkanaMongo from './pages/workana_mongo';
import Extra from './pages/extra';
import WorkanaGrafs from './pages/workana_grafs';
import Bienvenido from './pages/bienvenido';

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
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[]}>
            <Menu.Item key="1">
              <Link to="/">
                Bienvenido
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/motos">Motos</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/workana">Workana</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/extra">Extra</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
        <Sider>
          <Switch>
            <Route path="/workana">
              <WorkanaSidebar/>
            </Route>
            <Route path="/extra">
              <h1>Nada</h1>
            </Route>
            <Route path="/motos">
              <MotosSidebar/>
            </Route>
            <Route path="/">
              <h1>Nada</h1>
              {/* <Bienvenido/> */}
            </Route>
          </Switch>
        </Sider>
        <Content>
          <Switch>
            <Route path="/workana/grafs">
              <WorkanaGrafs/>
            </Route>
            <Route path="/workana/mongo">
              <WorkanaMongo/>
            </Route>
            <Route path="/extra">
              <Extra />
            </Route>
            <Route path="/workana">
              <WorkanaJobs/>
            </Route>
            <Route path="/motos">
              <Motos/>
            </Route>
            <Route path="/">
              <Bienvenido/>
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
