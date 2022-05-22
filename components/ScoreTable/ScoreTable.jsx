import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import NewCourseNavbar from '../Navbars/NewCourseNavbar'
import { useDispatch, useSelector } from 'react-redux'
import { clearCurrentCourse, setCurrentCourse } from '../../store/courses/reducer'

import { Layout, Table, Tooltip } from 'antd'
import { getUserData } from '../../store/auth/selectors'

const { Sider, Content } = Layout

const ScoreTable = ({ course, marks }) => {
  const { t } = useTranslation('teaching')
  const [isCollapsed, setIsCollapsed] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector(getUserData)

  useEffect(() => {
    dispatch(setCurrentCourse(course))
    return () => {
      dispatch(clearCurrentCourse())
    }
  }, [])

  const onCollapse = (currentState) => {
    setIsCollapsed(!currentState)
  }

  const initTable = [
    {
      title: t('name'),
      dataIndex: 'name',
      key: 'name',
      width: 120,
      fixed: 'left',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render(text, record) {
        return {
          children: <Tooltip title={'id: ' + record.userId}>
            <div>{text}</div>
          </Tooltip>,
        }
      },
    },
    {
      title: t('score'),
      dataIndex: 'totalScore',
      key: 'totalScore',
      width: 80,
      sorter: (a, b) => a.totalScore - b.totalScore,
    },
  ]

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
          }
        },
      }
    })
    return { ...item, children: updatedItemChildren }
  })

  const columns = initTable.concat(renderedColumns)

  return (
    <div className="container">
      <div className="my-3">
        <Layout>
          {user?._id === course.author._id
            ? <div className="d-none d-md-block">
              <Sider
                theme={'light'}
                collapsible
                width={150}
                collapsed={isCollapsed}
                onCollapse={() => onCollapse(isCollapsed)}
              >
                <NewCourseNavbar isCollapsed={isCollapsed}/>
              </Sider>
            </div> : null}
          <Content>
            {user?._id === course.author._id
              ? <div className="d-block d-md-none">
                <NewCourseNavbar isCollapsed={isCollapsed}/>
              </div>
              : null}
            <div className="container">
              <Table
                bordered
                // scroll={{ x: 700 }}
                pagination={{ position: ['none', 'none'] }}
                columns={columns}
                dataSource={marks.tableData}
              />
            </div>
          </Content>
        </Layout>
      </div>
    </div>
  )
}

export default ScoreTable
