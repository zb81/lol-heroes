import { useAtomValue } from 'jotai'
import { message } from 'antd'
import { heroesAtom, keywordAtom } from '../store'
import HeroItem from './HeroItem'

export default function Heroes() {
  const [msgApi, contextHolder] = message.useMessage()
  const heroes = useAtomValue(heroesAtom)
  const keyword = useAtomValue(keywordAtom)

  return (
    <>
      {contextHolder}
      {keyword}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 flex-wrap justify-items-center gap-5">
        {heroes.map(item => (
          <HeroItem key={item.instance_id} hero={item} msgApi={msgApi} />
        ))}
      </div>
    </>
  )
}
