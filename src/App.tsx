import { ConfigProvider, theme } from 'antd'
import { Suspense } from 'react'
import Heroes from './components/Heroes'
import Search from './components/Search'

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: { colorPrimary: '#2ed573' },
      }}
    >
      <Search />

      <Suspense fallback={<div className="text-center">数据加载中...</div>}>
        <Heroes />
      </Suspense>
    </ConfigProvider>
  )
}

export default App
