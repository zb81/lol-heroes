import { useAtomValue } from 'jotai'
import { categoryAtom, heroesAtom, keywordAtom } from '../store'
import HeroItem from './HeroItem'

export default function Heroes() {
  const heroes = useAtomValue(heroesAtom)
  const keyword = useAtomValue(keywordAtom)
  const category = useAtomValue(categoryAtom)

  // category 优先级高于 keyword
  const displayedHeroes = category.length === 0
    ? keyword.length === 0
      ? heroes
      : heroes.filter(hero => hero.keywords.toLowerCase().includes(keyword.toLowerCase()))
    : heroes.filter(hero => hero.categories.some(c => c.startsWith(category)))

  return (
    <div className="flex flex-wrap justify-between gap-5 pb-4">
      {displayedHeroes.map(item => (
        <HeroItem key={item.instance_id} hero={item} />
      ))}
      {Array.from({ length: 6 }).map((_, i) => <div className="w-[120px] h-0" key={i}></div>)}
    </div>
  )
}
