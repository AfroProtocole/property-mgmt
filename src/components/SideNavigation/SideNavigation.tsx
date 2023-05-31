import { Layout, Menu, MenuProps, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  RightOutlined,
} from "@ant-design/icons";
import React from "react";

const SideNavigation = () => {
  const { Sider } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items2: MenuProps["items"] = [
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  ].map((icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });
  const [isMenuCollapsed, setIsMenuCollpased] = React.useState(false);
  return (
    <>
      <Sider
        width={200}
        style={{ background: colorBgContainer }}
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
            onClick={() => {
              setIsMenuCollpased(!isMenuCollapsed);
            }}
          >
            <RightOutlined />
            {isMenuCollapsed ? "Show" : "Hide"}
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
};

export default SideNavigation;
