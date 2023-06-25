import { Breadcrumb, Button, Card, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { RightOutlined } from "@ant-design/icons";
import { MainBookmarkSetting } from "./components";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { favorites } from "~/types";
import { HomeOutlined } from "@ant-design/icons";

type LoaderData = { data: favorites[] };

const HomePage = () => {
  const [mainBookmark, setMainBookmark] = React.useState("");
  const loaderData = useLoaderData() as unknown as LoaderData;
  console.log("loader data", loaderData.data);

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }} separator={<RightOutlined />}>
        <Breadcrumb.Item>
          <HomeOutlined />
        </Breadcrumb.Item>
      </Breadcrumb>
      <Content
        style={{
          margin: 0,
          minHeight: 280,
        }}
      >
        <Card bodyStyle={{ display: "flex", justifyContent: "space-between" }}>
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
        </Card>
      </Content>
    </>
  );
};

export default HomePage;
