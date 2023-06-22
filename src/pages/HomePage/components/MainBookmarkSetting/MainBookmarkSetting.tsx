import { SettingOutlined } from "@ant-design/icons";
import { useLoaderData } from "react-router-dom";

const MainBookmarkSetting = () => {
  const loaderData = useLoaderData();
  console.log("from settings", loaderData);
  return <SettingOutlined />;
};

export default MainBookmarkSetting;
