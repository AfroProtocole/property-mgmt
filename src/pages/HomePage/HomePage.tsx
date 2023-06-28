import { Alert, Breadcrumb, Button, Card, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import {
  ApartmentOutlined,
  FormOutlined,
  RightOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { MainBookmarkSetting } from "./components";
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { favorites } from "~/types";
import { HomeOutlined } from "@ant-design/icons";

type LoaderData = { data: favorites[] };

const HomePage = () => {
  const loaderData = useLoaderData() as unknown as LoaderData;
  const navigate = useNavigate();

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }} separator={<RightOutlined />}>
        <Breadcrumb.Item>
          <HomeOutlined />
        </Breadcrumb.Item>
      </Breadcrumb>
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{ fontSize: "120px", color: "grey", alignContent: "center" }}
        >
          <FormOutlined onClick={() => navigate("/service-request")} />
          <Typography.Title level={5}>Service Requests</Typography.Title>
        </div>
        <div
          style={{ fontSize: "120px", color: "grey", alignContent: "center" }}
        >
          <ApartmentOutlined onClick={() => navigate("/service-request")} />
          <Typography.Title level={5}>Manage Units</Typography.Title>
        </div>
        <div
          style={{ fontSize: "120px", color: "grey", alignContent: "center" }}
        >
          <UsergroupAddOutlined onClick={() => navigate("/tenants")} />
          <Typography.Title level={5}>Manage Tenants</Typography.Title>
        </div>
      </section>

      <Typography.Title level={5}>All Bookmarks</Typography.Title>
      <Card bodyStyle={{ display: "flex", justifyContent: "space-between" }}>
        {loaderData.data.length ? (
          <>
            <div style={{ width: "100%" }}>
              {loaderData.data.map((favorite: favorites) => {
                return (
                  <Card
                    size="small"
                    bodyStyle={{ width: "100", height: "100" }}
                    bordered
                    style={{
                      backgroundImage: favorite.image,
                      backgroundColor: "ButtonFace",
                      width: 200,
                      height: 150,
                    }}
                  >
                    <Typography.Title level={5}>
                      {favorite.favType}
                    </Typography.Title>
                    <Typography.Text>{favorite.name}</Typography.Text>
                  </Card>
                );
              })}
            </div>
            <div style={{ flex: 1, alignContent: "revert" }}>
              <MainBookmarkSetting />
            </div>
          </>
        ) : (
          <Card
            size="small"
            bodyStyle={{ width: "80%", height: "80%" }}
            bordered
            style={{
              backgroundColor: "ButtonFace",
              width: 200,
              height: 150,
            }}
          >
            <Alert
              showIcon
              type="info"
              description="Bookmark units, building, properties and more"
            />
          </Card>
        )}
      </Card>
    </>
  );
};

export default HomePage;
