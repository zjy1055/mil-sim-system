import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'

const { Header, Content, Sider } = Layout

const App: React.FC = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <Link to="/">首页</Link>,
    },
    {
      key: '2',
      label: <Link to="/data">数据管理</Link>,
    },
    {
      key: '3',
      label: <Link to="/knowledge">知识库</Link>,
    },
    {
      key: '4',
      label: <Link to="/task">任务规划</Link>,
    },
    {
      key: '5',
      label: <Link to="/model">模型管理</Link>,
    },
    {
      key: '6',
      label: <Link to="/system">系统设置</Link>,
    },
  ]

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <div className="logo" style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>
            大小模型协同的任务规划仿真系统
          </div>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              items={items}
              style={{ height: '100%', borderRight: 0 }}
            />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/data" element={<DataManagement />} />
                <Route path="/knowledge" element={<KnowledgeBase />} />
                <Route path="/task" element={<TaskPlanning />} />
                <Route path="/model" element={<ModelManagement />} />
                <Route path="/system" element={<SystemSettings />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  )
}

const Home: React.FC = () => {
  return <div>首页内容</div>
}

const DataManagement: React.FC = () => {
  return <div>数据管理内容</div>
}

const KnowledgeBase: React.FC = () => {
  return <div>知识库内容</div>
}

const TaskPlanning: React.FC = () => {
  return <div>任务规划内容</div>
}

const ModelManagement: React.FC = () => {
  return <div>模型管理内容</div>
}

const SystemSettings: React.FC = () => {
  return <div>系统设置内容</div>
}

export default App