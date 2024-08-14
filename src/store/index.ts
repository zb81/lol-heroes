import { atom } from 'jotai'
import type { Hero } from '../types'

const API_URL = 'https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js?ts=2797816'

export const heroesAtom = atom(async () => {
  const res = await fetch(API_URL)
  const data = await res.json()
  const heroes: Hero[] = data.hero
  heroes.forEach((hero) => {
    // 将拼音、英文名转成全小写数组
    hero.categories = hero.keywords.split(',')
      .filter(v => /^[a-z]+$/i.test(v))
      .map(v => v.toLowerCase())
  })

  return heroes
})

export const keywordAtom = atom('')

export const categoryAtom = atom('')
