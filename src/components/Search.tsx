import { Input } from 'antd'
import { useAtom, useSetAtom } from 'jotai'
import React from 'react'
import classNames from 'classnames'
import { categoryAtom, keywordAtom } from '../store'

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')

export default function Search() {
  const setKeyword = useSetAtom(keywordAtom)
  const [category, setCategory] = useAtom(categoryAtom)

  return (
    <div className="sticky top-0 pt-4 pb-[10px] bg-dark z-10">
      <Input.Search
        size="large"
        placeholder="输入关键字..."
        allowClear
        onSearch={(v) => {
          setCategory('')
          setKeyword(v)
        }}
      />

      <div className="mt-2 flex select-none font-mono">
        <div className="shrink-0 leading-7">首字母：</div>
        <div className="flex flex-wrap gap-[6px]">
          {ALPHABET.map((letter) => {
            const isActive = letter === category
            return (
              <a
                key={letter}
                className={classNames(
                  'cursor-pointer px-2 py-1 hover:bg-[#333] rounded-[4px]',
                  {
                    '!bg-primary': isActive,
                  },
                )}
                onClick={(e) => {
                  e.preventDefault()
                  setCategory(isActive ? '' : letter)
                }}
              >
                {letter.toUpperCase()}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
