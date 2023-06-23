import React from "react";
import { Layout, Button, Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { auth } from "../../lib/firebase";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  InboxOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const TopNavigation: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Error occurred during logout:", error);
    }
  };

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
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["overview"]}
      >
        <Menu.Item key="overview">Overview</Menu.Item>
        <Menu.Item key="property">Property</Menu.Item>
        <Menu.Item key="building">Building</Menu.Item>
        <Menu.Item key="unit">Unit</Menu.Item>
      </Menu>
      <div style={{ flex: 1 }} />
      <div style={{ display: "flex", alignItems: "center", paddingRight: "1rem" }}>
        <Button type="primary" icon={<InboxOutlined />} style={{ marginRight: "0.5rem" }} />
        <Button type="primary" icon={<UserOutlined />} onClick={handleLogout} />
      </div>
    </Header>
  );
};

export default TopNavigation;
