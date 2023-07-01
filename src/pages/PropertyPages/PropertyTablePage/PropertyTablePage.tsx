import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import { CustomTable } from "~/components";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Jim Green",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "30%",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: "20%",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["descend", "ascend"],
  },
];

const PropertyTablePage = () => {
  return (
    <>
      <Breadcrumb separator=">">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Property</Breadcrumb.Item>
      </Breadcrumb>
      <CustomTable
        tableHeaders={
          <div>
            <Typography.Title level={5}>Table Header</Typography.Title>
          </div>
        }
        tableProps={{
          dataSource: data,
          columns: columns,
        }}
      />
    </>
  );
};

export default PropertyTablePage;
