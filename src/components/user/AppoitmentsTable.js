import React from "react";
import { Button, Space, Steps, Table, Tag } from "antd";
import { useNavigate } from "react-router";

const AppoitmentsTable = () => {
  const columns = [
    {
      title: "Appoitment Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Appoitment Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Doctor",
      dataIndex: "doctor",
      key: "doctor",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "action",
    },
  ];
  const data = [
    {
      date: "23/8/2023",

      time: "3:00 PM",
      doctor: "Omar Shahwan",
      status: `Waiting, One day left`,
      action: (
        <Button
          onClick={() => navigate("/room/session")}
          disabled={true}
          type="primary"
        >
          Join
        </Button>
      ),
    },
  ];
  const navigate = useNavigate();

  return <Table pagination={false} columns={columns} dataSource={data} />;
};
export default AppoitmentsTable;
