import { atom } from 'jotai'
import type { Hero } from '../types'

export const heroesAtom = atom(async () => {
  const res = await fetch(
    'https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js?ts=2797816',
  )
  const data = await res.json()
  return data.hero as Hero[]
})

export const keywordAtom = atom('')

export const firstLetterAtom = atom('')
