'use client'

import { useTransition } from 'react'
import { Input } from './ui/input'
import { usePathname, useRouter } from 'next/navigation'
import { debounce } from 'lodash-es'

interface Props {
  className?: string
}

export default function SearchField({ className }: Props) {
  const { replace } = useRouter()
  const pathname = usePathname()
  const [, startTransition] = useTransition()

  const handleSearch = debounce((v: string) => {
    const p = new URLSearchParams(window.location.search)
    if (v) {
      p.set('q', v)
    } else {
      p.delete('q')
    }
    startTransition(() => {
      replace(`${pathname}?${p.toString()}`)
    })
  }, 300)

  return (
    <Input
      autoFocus
      className={className}
      placeholder='输入关键词'
      onChange={e => handleSearch(e.target.value)}
    />
  )
}
