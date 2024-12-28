import { Hero } from '@/types'
import Image from 'next/image'
import React from 'react'

export default function HeroItem({ hero }: { hero: Hero }) {
  return (
    <div className='flex flex-col items-center text-sm rounded-md overflow-hidden border pb-2'>
      <Image
        className='object-cover object-top w-[120px] h-[130px]'
        width={120}
        height={130}
        alt={hero.name}
        src={`https://game.gtimg.cn/images/lol/act/img/skinloading/${hero.instance_id}.jpg`}
      />
      <p className='my-1.5'>{hero.name}</p>
      <div className='w-full flex items-center justify-evenly'>
        <a
          href={`https://www.op.gg/modes/aram/${hero.alias.toLowerCase()}/build`}
          target="_blank"
          className='underline underline-offset-4 hover:no-underline'
        >
          大乱斗
        </a>
        <a
          href={`https://www.op.gg/champions/${hero.alias.toLowerCase()}/build`}
          target="_blank"
          className='underline underline-offset-4 hover:no-underline'
        >
          峡谷
        </a>
      </div>
    </div>
  )
}
