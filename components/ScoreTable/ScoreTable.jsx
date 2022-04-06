import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { useTranslation } from 'next-i18next';
import NewCourseNavbar from '../Navbars/NewCourseNavbar';
import { useDispatch } from 'react-redux';
import {
  clearCurrentCourse,
  setCurrentCourse,
} from '../../store/courses/reducer';

import { Layout } from 'antd';
const { Sider, Content } = Layout;

const ScoreTable = ({ course, marks }) => {
  const { t } = useTranslation('teaching');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentCourse(course));
    return () => {
      dispatch(clearCurrentCourse());
    };
  }, []);

  const onCollapse = (currentState) => {
    setIsCollapsed(!currentState);
  };

  const initTable = [
    /*{
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
    },*/
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
        <Layout>
          <div className='d-none d-md-block'>
            <Sider
              theme={'light'}
              collapsible
              width={150}
              collapsed={isCollapsed}
              onCollapse={() => onCollapse(isCollapsed)}
            >
              <NewCourseNavbar isCollapsed={isCollapsed} />
            </Sider>
          </div>
          <Content>
            <div className='d-block d-md-none'>
              <NewCourseNavbar isCollapsed={isCollapsed} />
            </div>
            <div className='container'>
              <Table
                bordered
                scroll={{ x: 700 }}
                pagination={{ position: ['none', 'none'] }}
                columns={columns}
                dataSource={marks.tableData}
              />
            </div>
          </Content>
        </Layout>
      </div>
    </div>
  );
};

export default ScoreTable;