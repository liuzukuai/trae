import { Layout, Menu, Button, Alert } from 'antd'
import {
  DashboardOutlined,
  ShoppingOutlined,
  SettingOutlined,
  ThunderboltOutlined,
  BgColorsOutlined,
  FileTextOutlined,
} from '@ant-design/icons'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const { Header, Sider, Content } = Layout

export default function MainLayout() {
  const navigate = useNavigate()
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  const [hasData, setHasData] = useState<boolean>(false)

  useEffect(() => {
    const dataExists = localStorage.getItem('hasData')
    setHasData(dataExists === 'true')
  }, [])

  const menuItems = [
    {
      key: '/dashboard',
      icon: <DashboardOutlined />,
      label: '仪表盘',
      onClick: () => navigate('/'),
    },
    {
      key: '/products',
      icon: <ShoppingOutlined />,
      label: '商品列表',
      onClick: () => navigate('/products'),
    },
    {
      key: '/settings',
      icon: <SettingOutlined />,
      label: '设置',
      onClick: () => navigate('/settings'),
    },
  ]

  const getSelectedKey = () => {
    const path = location.pathname
    if (path === '/') return '/dashboard'
    if (path.startsWith('/products')) return '/products'
    if (path === '/settings') return '/settings'
    return '/dashboard'
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} theme="light" width={200}>
        <div style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #f0f0f0' }}>
          <span style={{ fontSize: 18, fontWeight: 600, color: '#1677ff' }}>数据参谋</span>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[getSelectedKey()]}
          items={menuItems}
          style={{ borderRight: 0 }}
        />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: 16, fontWeight: 500 }}>淘宝数据参谋</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Button
              type="primary"
              icon={<ThunderboltOutlined />}
              onClick={() => {
                alert('🚧 AI 智能诊断\n\n功能正在开发中，后续将支持：\n• 每日自动诊断报告\n• 异常检测与告警\n• 自然语言问答\n• 优化建议生成\n\n敬请期待！')
              }}
            >
              AI 诊断
            </Button>
            <Button
              icon={<BgColorsOutlined />}
              onClick={() => {
                const currentTheme = document.documentElement.getAttribute('data-theme')
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
                document.documentElement.setAttribute('data-theme', newTheme)
              }}
            >
              切换主题
            </Button>
          </div>
        </Header>
        <Content style={{ margin: 24, background: '#fff', borderRadius: 8 }}>
          {!hasData && location.pathname !== '/import' && (
            <Alert
              message="暂无数据，请先导入生意参谋数据"
              type="warning"
              showIcon
              style={{ marginBottom: 24 }}
              action={
                <Button type="primary" size="small" icon={<FileTextOutlined />} onClick={() => navigate('/import')}>
                  去导入
                </Button>
              }
            />
          )}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
