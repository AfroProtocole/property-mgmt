import React from "react";
import { Layout, Button, Menu, Popover, Avatar, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { auth } from "../../lib/firebase";
import {
  LaptopOutlined,
  NotificationOutlined,
  EllipsisOutlined,
  UserOutlined,
  InboxOutlined,
  QuestionCircleOutlined
} from "@ant-design/icons";

const { Header } = Layout;

const TopNavigation: React.FC = () => {
  const navigate = useNavigate();

  const menu = (
    <Menu>
      <Menu.Item key="Gym">Gym</Menu.Item>
      <Menu.Item key="Pool">Pool</Menu.Item>
      <Menu.Item key="Court">Court</Menu.Item>
      <Menu.Item key="Private Room">Private Room</Menu.Item>
      <Menu.Item key="Cabin">Cabin</Menu.Item>
      <Menu.Item key="Country Side">Country Side</Menu.Item>
    </Menu>
  );

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Error occurred during logout:", error);
    }
  };

    const handleMenuClick = ({ key }: any) => {
    if (key === "account") {
      // Handle account click
    } else if (key === "settings") {
      // Handle settings click
    } else if (key === "signout") {
      handleLogout();
    } else if (key === "help") {
      // Handle help click
    }
  };

  const userContent = (
    <div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Avatar size={64} icon={<UserOutlined />} />
        <div style={{ marginTop: "0.5rem", fontWeight: "bold" }}>User Name</div>
        <div style={{ marginTop: "0.5rem" }}>user@example.com</div>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <Button type="link" icon={<UserOutlined />} onClick={() => handleMenuClick({ key: "account" })}>
          Account
        </Button>
        <Button type="link" icon={<EllipsisOutlined />} onClick={() => handleMenuClick({ key: "settings" })}>
          Settings
        </Button>
        <Button type="link" icon={<UserOutlined />} onClick={() => handleMenuClick({ key: "signout" })}>
          Sign Out
        </Button>
        <Button type="link" icon={<QuestionCircleOutlined />} onClick={() => handleMenuClick({ key: "help" })}>
          Help
        </Button>
      </div>
    </div>
  );

  return (
    <Header
      style={{
        background: "#fff",
        padding: 0,
        display: "flex",
        alignItems: "center",
      }}
    >
  <div className="logo" style={{ height: "100px", width: "60px", paddingLeft: "0.5rem"}}>
  <img style={{ height: "100%", width: "100%", objectFit: "contain" }}
    src="/logo1.png" alt="Prop Ease"
  />
  </div>
      <Menu mode="horizontal" style={{ flexGrow: 1 }}>
        <Menu.Item key="overview">Overview</Menu.Item>
        <Menu.Item key="property">Property</Menu.Item>
        <Menu.Item key="building">Building</Menu.Item>
        <Menu.Item key="units">Units</Menu.Item>
        <Menu.Item key="more">
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button type="link" icon={<EllipsisOutlined />} />
          </Dropdown>
        </Menu.Item>
      </Menu>
      <div style={{ flex: 1 }} />
        <div style={{ display: "flex", alignItems: "center", paddingRight: "1rem" }}>
        <Button type="primary" icon={<InboxOutlined />} style={{ marginRight: "0.5rem" }} />
        <Popover placement="bottomRight" content={userContent} trigger="click">
          <Button type="primary" icon={<UserOutlined />} style={{ marginRight: "0.5rem" }} />
        </Popover>
      </div>
    </Header>
  );
};

export default TopNavigation;
