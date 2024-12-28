import { Hero } from '@/types'
import React from 'react'
import HeroItem from './HeroItem'

const API_URL = 'https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js?ts=2797816'

export default async function HeroList({ q }: { q?: string }) {
  const res = await fetch(API_URL, {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  })
  const data = await res.json()
  let heroes: Hero[] = data.hero

  if (q) {
    heroes = heroes.filter(h => h.keywords.toLowerCase().includes(q.toLowerCase()))
  }

  const isEmpty = heroes.length === 0

  return (
    isEmpty
      ? (
        <div className='text-center mt-10 text-sm'>没有找到英雄</div>
      )
      : (
        <ul className='flex flex-wrap gap-5 pb-4'>

          {heroes.map(hero => (
            <li key={hero.heroId}>
              <HeroItem hero={hero} />
            </li>
          ))}
        </ul>
      )
  )
}
