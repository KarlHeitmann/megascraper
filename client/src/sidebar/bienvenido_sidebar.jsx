import React from 'react';
import {
  Menu,
} from 'antd';

import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

function BienvenidoSidebar(props) {
  return(
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
      >
      <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="Bienvenido">
        <Menu.Item key="1">Quien soy</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}

export default BienvenidoSidebar;
