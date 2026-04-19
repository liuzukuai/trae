import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  const { id } = useParams()

  return (
    <div style={{ padding: 24 }}>
      <h2>单品详情</h2>
      <p>商品 ID: {id}</p>
      <p>单品详情页面正在开发中...</p>
    </div>
  )
}
