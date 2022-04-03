import React from "react";
import { Table } from "antd";
import { useTranslation } from 'next-i18next'

const ScoreTable = ({marks}) => {
  const { t } = useTranslation('teaching')

  const initTable = [
    {
      title: t("name"),
      dataIndex: "name",
      key: "name",
      width: 120,
      fixed: "left",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: t("score"),
      dataIndex: "totalScore",
      key: "totalScore",
      width: 80,
      sorter: (a, b) => a.totalScore - b.totalScore,
    },
  ];

  const columns = initTable.concat(marks.columnsData);

  return (
    <div className="container">
      <div className="my-3">
        <Table
          bordered
          scroll={{ x: 700 }}
          pagination={{ position: ["none", "none"] }}
          columns={columns}
          dataSource={marks.tableData}
        />
      </div>
    </div>
  );
};

export default ScoreTable;
