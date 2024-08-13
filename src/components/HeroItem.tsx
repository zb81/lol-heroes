import { Button } from 'antd'
import { CopyOutlined } from '@ant-design/icons'
import type { MessageInstance } from 'antd/es/message/interface'
import type { Hero } from '../types'

function Center({ children }: React.PropsWithChildren) {
  return <div className="text-xs my-1 flex items-center justify-center">{children}</div>
}

interface HeroItemProps {
  msgApi: MessageInstance
  hero: Hero
}

function HeroItem({ hero, msgApi }: HeroItemProps) {
  async function onCopy(text: string) {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text)
      msgApi.open({ type: 'success', content: '复制成功' })
    }
    else {
      msgApi.open({ type: 'error', content: '浏览器不支持复制' })
    }
  }

  return (
    <div className="bg-black w-[100px]">
      <a
        href={`https://101.qq.com/#/hero-detail?heroid=${hero.heroId}&datatype=fight&tab=overview`}
        target="_blank"
      >
        <img
          className="w-full h-[100px] object-cover object-top"
          src={`https://game.gtimg.cn/images/lol/act/img/skinloading/${hero.instance_id}.jpg`}
          alt={hero.name}
        />
      </a>
      <Center>{hero.name}</Center>
      <Center>
        {hero.alias}
        <Button
          size="small"
          icon={<CopyOutlined />}
          type="text"
          onClick={() => onCopy(hero.alias)}
        />
      </Center>
    </div>
  )
}
export default HeroItem
