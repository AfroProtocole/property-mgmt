import { Layout, Menu, MenuProps, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  RightOutlined,
  DeploymentUnitOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

const SideNavigation = () => {
  const { Sider } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [isMenuCollapsed, setIsMenuCollpased] = React.useState(false);
  return (
    <>
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
          <Menu.Item icon={<UserAddOutlined />}>
            <Link to="/signup">Create User </Link>
          </Menu.Item>
          <Menu.Item icon={<DeploymentUnitOutlined />}>
            <Link to="/organization/new">Create Organization</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
};

export default SideNavigation;
