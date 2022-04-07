import React, { Suspense, useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import NewCourseNavbar from '../Navbars/NewCourseNavbar'
import { useDispatch } from 'react-redux'
import { clearCurrentCourse, setCurrentCourse } from '../../store/courses/reducer'
import Loader from '../Loader/Loader'

import { Layout, Select, Table, Tooltip } from 'antd'

const { Option } = Select
const { Sider, Content } = Layout
const CodeEditor = React.lazy(() => import('../CodeEditor/CodeEditor'))

const ScoreTable = ({ course, marks }) => {
  const { t } = useTranslation('teaching')
  const [isCollapsed, setIsCollapsed] = useState(false)
  const dispatch = useDispatch()

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

  const [editorValue, setEditorValue] = useState('')
  const [selectedLang, setSelectedLang] = useState('text/x-c++src')
  const [selectedTheme, setSelectedTheme] = useState('dracula')


  return (
    <div className="container">
      <div className="my-3">
        <Layout>
          <div className="d-none d-md-block">
            <Sider
              theme={'light'}
              collapsible
              width={150}
              collapsed={isCollapsed}
              onCollapse={() => onCollapse(isCollapsed)}
            >
              <NewCourseNavbar isCollapsed={isCollapsed}/>
            </Sider>
          </div>
          <Content>
            <div className="d-block d-md-none">
              <NewCourseNavbar isCollapsed={isCollapsed}/>
            </div>
            <div className="container">
              <Table
                bordered
                scroll={{ x: 700 }}
                pagination={{ position: ['none', 'none'] }}
                columns={columns}
                dataSource={marks.tableData}
              />
              <div className="my-5">
                <div className="d-flex">
                  <div className="d-flex mr-3 mb-2 align-items-center">
                    <h6 className="m-0 mr-2">Language: </h6>
                    <Select
                      style={{ width: 120 }}
                      value={selectedLang}
                      onChange={(value) => setSelectedLang(value)}>
                      <Option value="text/x-c++src">C++</Option>
                      <Option value="python">Python</Option>
                      <Option value="javascript">JavaScript</Option>
                    </Select>
                  </div>
                  <div className="d-flex mb-2 align-items-center">
                    <h6 className="m-0 mr-2">Theme: </h6>
                    <Select
                      style={{ width: 120 }}
                      value={selectedTheme}
                      onChange={(value) => setSelectedTheme(value)}>
                      <Option value="eclipse">Eclipse</Option>
                      <Option value="idea">Idea</Option>
                      <Option value="material">Material</Option>
                      <Option value="dracula">Dracula</Option>
                    </Select>
                  </div>
                </div>
                <Suspense fallback={<Loader/>}>
                  <CodeEditor
                    language={selectedLang}
                    theme={selectedTheme}
                    value={editorValue}
                    onChange={setEditorValue}
                  />
                </Suspense>
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    </div>
  )
}

export default ScoreTable
