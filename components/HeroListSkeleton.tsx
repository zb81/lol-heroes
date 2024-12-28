import React from 'react'
import { Skeleton } from './ui/skeleton'

export default function HeroListSkeleton() {
  return (
    <div className='flex gap-5 flex-wrap justify-between'>
      {Array.from({ length: 15 }).map((_, i) => (
        <div key={i} className='w-[120px]'>
          <Skeleton className='w-full h-[130px]' />
          <Skeleton className='w-full h-5 mt-2 mx-auto' />
        </div>
      ))}
    </div>
  )
}
