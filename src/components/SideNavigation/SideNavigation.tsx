import React from "react";
import { Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";
import {
  RightOutlined,
  DeploymentUnitOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  BellOutlined,
  CalendarOutlined,
  ProfileOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const SideNavigation = () => {
  const { Sider } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [isMenuCollapsed, setIsMenuCollpased] = React.useState(false);

  return (
    <Sider
      width={200}
      style={{ background: colorBgContainer, marginRight: "2rem" }}
      collapsible={true}
      collapsed={isMenuCollapsed}
      reverseArrow={false}
      trigger={null}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item
          icon={<RightOutlined />}
          onClick={() => {
            setIsMenuCollpased(!isMenuCollapsed);
          }}
        >
          {isMenuCollapsed ? "Show" : "Hide"}
        </Menu.Item>
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<DeploymentUnitOutlined />}>
          <Link to="/organization/new">Create Organization</Link>
        </Menu.Item>
        <Menu.Item icon={<UsergroupAddOutlined />}>
          <Link to="/tenants">Tenants</Link>
        </Menu.Item>
        <Menu.Item icon={<BellOutlined />}>
          <Link to="/finance">Finance</Link>
        </Menu.Item>
        <Menu.Item icon={<CalendarOutlined />}>
          <Link to="/servicerequest">Service Request</Link>
        </Menu.Item>
        <Menu.Item icon={<ProfileOutlined />}>
          <Link to="/inventory-of-fixtures">Inventory Of Fixtures</Link>
        </Menu.Item>
        <Menu.Item icon={<CalendarOutlined />}>
          <Link to="/calendar">Calendar</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideNavigation;
