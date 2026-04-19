import { Button, Card } from 'antd'

export default function Import() {

  return (
    <div style={{ padding: 24 }}>
      <h2>数据导入</h2>
      <Card style={{ marginTop: 24, maxWidth: 600, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', padding: 40 }}>
          <p style={{ fontSize: 16, marginBottom: 24 }}>
            请先导入生意参谋导出的 CSV/XLS 数据文件
          </p>
          <Button type="primary" size="large" onClick={() => {
            alert('数据导入功能正在开发中，将在 Task 2.4 实现')
          }}>
            开始导入
          </Button>
          <p style={{ marginTop: 16, color: '#999' }}>
            支持文件格式：
          </p>
          <ul style={{ textAlign: 'left', display: 'inline-block', marginTop: 8 }}>
            <li>商品销售数据（CSV）</li>
            <li>商品推广数据（CSV）</li>
            <li>店铺流量来源（XLS）</li>
          </ul>
        </div>
      </Card>
    </div>
  )
}
