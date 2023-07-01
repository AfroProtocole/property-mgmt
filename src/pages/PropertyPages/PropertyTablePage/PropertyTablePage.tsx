import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import { useLoaderData } from "react-router-dom";
import { CustomTable } from "~/components";
import { LoaderData, property } from "~/types";

const columns: ColumnsType<property> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 200,
  },
  {
    title: "Property ID",
    dataIndex: "id",
    key: "id",
    width: 250,
    render: (_, record) => {
      const { id = "" } = record;
      return (
        <Typography.Link>
          <a href={`/property${id}`} target="_blank">
            {id}
          </a>
        </Typography.Link>
      );
    },
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
    width: 200,
    sorter: (a, b) => a.state.length - b.state.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
    width: 200,
    sorter: (a, b) => a.city.length - b.city.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
    width: 200,
    sorter: (a, b) => a.country.length - b.country.length,
    sortDirections: ["descend", "ascend"],
  },
];

const PropertyTablePage = () => {
  const loaderData = useLoaderData() as unknown as LoaderData<property[]>;
  console.log("property table", loaderData);
  return (
    <>
      <Breadcrumb separator=">">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Property</Breadcrumb.Item>
      </Breadcrumb>
      <section style={{ marginTop: "2rem" }}>
        <CustomTable
          tableHeaders={
            <div style={{ display: "flex" }}>
              <Typography.Text strong>All Properties Info: </Typography.Text>
              <Typography.Text italic>
                {loaderData.data.length} Total Records Found
              </Typography.Text>
            </div>
          }
          tableProps={{
            dataSource: loaderData.data || [],
            columns: columns,
          }}
        />
      </section>
    </>
  );
};

export default PropertyTablePage;
