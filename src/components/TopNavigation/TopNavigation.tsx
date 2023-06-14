import React from "react";
import { Layout, Button, Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { auth } from "../../lib/firebase";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
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
      <div className="demo-logo" />
      [Logo]
      <div style={{ flex: 1 }} />
      <div style={{ paddingRight: "2rem" }}>
        <Button type="primary" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </Header>
  );
};

export default TopNavigation;
