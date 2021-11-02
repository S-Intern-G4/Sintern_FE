import React from 'react';
import styled from 'styled-components';
import { Menu, Layout } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';

const { Sider: AntSider } = Layout;

const StyledSider = styled(AntSider)`
  background-color: transparent;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  .ant-layout-sider-trigger {
    background-color: #d74e28;
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #fbede9;
  }
`;

const MenuItem = styled(Menu.Item)`
  &.ant-menu-item:hover {
    color: #e38368;
  }

  &.ant-menu-item::after {
    border-right: 2px solid #e38368;
  }

  &.ant-menu-item-selected,
  &.ant-menu-item-active {
    color: #df7153;
    background-color: #fbede9;
  }

  &.ant-layout-sider-trigger {
    background-color: #df7153;
  }
`;

const Sider = () => {
  const location = useLocation();
  const selectedKey = location.pathname.substring(1);

  return (
    <StyledSider collapsible>
      <Menu defaultSelectedKeys={[selectedKey]} mode='inline'>
        <MenuItem key={'accommodations'} icon={<HomeOutlined />}>
          Menu Item 1
        </MenuItem>

        <MenuItem key={'accommodations'} icon={<HomeOutlined />}>
          Menu Item 2
        </MenuItem>

        <MenuItem key={'accommodations'} icon={<HomeOutlined />}>
          Menu Item 3
        </MenuItem>

      </Menu>
    </StyledSider>
  );
};

export default Sider;