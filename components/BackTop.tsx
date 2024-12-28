'use client'

import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

export default function BackTop() {
  const [show, setShow] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Button
      className={cn(
        "fixed bottom-4 right-4 rounded-full transition-all",
        show ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      )}
      size='icon'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp />
    </Button>
  )
}
