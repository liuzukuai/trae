import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '@/components/Layout/MainLayout'
import Dashboard from '@/pages/Dashboard'
import ProductList from '@/pages/ProductList'
import ProductDetail from '@/pages/ProductDetail'
import Settings from '@/pages/Settings'
import Import from '@/pages/Import'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'products',
        element: <ProductList />,
      },
      {
        path: 'products/:id',
        element: <ProductDetail />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'import',
        element: <Import />,
      },
    ],
  },
])

export default function Routes() {
  return <RouterProvider router={router} />
}
