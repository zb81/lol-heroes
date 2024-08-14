import { Button } from 'antd'
import type { Hero } from '../types'

interface HeroItemProps {
  hero: Hero
}

function HeroItem({ hero }: HeroItemProps) {
  return (
    <div className="bg-black w-[120px]">
      <img
        className="w-full h-[130px] object-cover object-top"
        src={`https://game.gtimg.cn/images/lol/act/img/skinloading/${hero.instance_id}.jpg`}
        alt={hero.name}
      />
      <div className="text-center mt-1">{hero.name}</div>
      <div className="flex justify-evenly py-[6px]">
        <a
          href={`https://www.op.gg/modes/aram/${hero.alias.toLowerCase()}/build?region=kr&tier=emerald_plus`}
          target="_blank"
        >
          <Button size="small">OP.GG</Button>
        </a>
        <a
          href={`https://101.qq.com/#/hero-detail?heroid=${hero.heroId}&datatype=fight&tab=overview`}
          target="_blank"
        >
          <Button size="small">101</Button>
        </a>
      </div>
    </div>
  )
}
export default HeroItem
