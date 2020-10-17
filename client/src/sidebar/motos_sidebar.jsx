import React from 'react';
import {
  Menu,
} from 'antd';

import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

function MotosSidebar(props) {
  return(
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
      >
      <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="Datos">
        <Menu.Item key="1">Inicio</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}

export default MotosSidebar;
