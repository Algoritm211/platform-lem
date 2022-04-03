import React from 'react';
import { Table } from 'antd';
import { useTranslation } from 'next-i18next';

const ScoreTable = ({ marks }) => {
  const { t } = useTranslation('teaching');

  const initTable = [
    {
      title: 'UserId',
      dataIndex: 'userId',
      key: 'userId',
      render(text, record) {
        return {
          props: {
            style: { color: '#999' },
          },
          children: <div>{text}</div>,
        };
      },
    },
    {
      title: t('name'),
      dataIndex: 'name',
      key: 'name',
      width: 120,
      fixed: 'left',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: t('score'),
      dataIndex: 'totalScore',
      key: 'totalScore',
      width: 80,
      sorter: (a, b) => a.totalScore - b.totalScore,
    },
  ];

  const renderedColumns = marks.columnsData.map((item) => {
    const updatedItemChildren = item.children.map((child) => {
      return {
        ...child,
        render(text, record) {
          return {
            props: {
              style: { background: parseInt(text) > 0 ? '#95de64' : null },
            },
            children: <div>{text}</div>,
          };
        },
      };
    });

    return { ...item, children: updatedItemChildren };
  });

  const columns = initTable.concat(renderedColumns);

  return (
    <div className='container'>
      <div className='my-3'>
        <Table
          bordered
          scroll={{ x: 700 }}
          pagination={{ position: ['none', 'none'] }}
          columns={columns}
          dataSource={marks.tableData}
        />
      </div>
    </div>
  );
};

export default ScoreTable;
