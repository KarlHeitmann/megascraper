import React from 'react';
import {
  Menu,
} from 'antd';

import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function WorkanaSidebar(props) {
  return(
    <Menu
      mode="inline"
      // defaultSelectedKeys={['1']}
      // defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
      >
      <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="Scrape">
        <Menu.Item key="1">
          <Link to="/workana">
            Scraping
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/workana/mongo">
            Visualizar Mongo
          </Link>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="sub2" icon={<LaptopOutlined />} title="Graficos">
        <Menu.Item key="3">
          <Link to="/workana/grafs">
            Graficos
          </Link>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}

export default WorkanaSidebar;
