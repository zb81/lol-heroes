import { ConfigProvider, Input, theme } from 'antd'
import { useSetAtom } from 'jotai'
import { Suspense } from 'react'
import { keywordAtom } from './store'
import Heroes from './components/Heroes'

function App() {
  const setKeyword = useSetAtom(keywordAtom)
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <div className="sticky top-0 py-5 bg-dark z-10">
        <Input.Search
          className="w-1/2 mx-auto block"
          placeholder="输入关键字..."
          onSearch={setKeyword}
        />
      </div>

      <Suspense fallback={<div>数据加载中...</div>}>
        <Heroes />
      </Suspense>
    </ConfigProvider>
  )
}

export default App
