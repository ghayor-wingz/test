'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    const el = marqueeRef.current
    if (!el) return

    let x = 0
    const speed = 0.35

    const animate = () => {
      x -= speed
      if (Math.abs(x) >= el.scrollWidth / 2) x = 0
      el.style.transform = `translate3d(${x}px, 0, 0)`
      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <div className="w-full overflow-hidden bg-[#F3F757] py-2 md:py-6">
      <div className="whitespace-nowrap select-none">
        <div
          ref={marqueeRef}
          className="flex items-center gap-10 will-change-transform"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="text-black text-[30px] md:text-[115px] font-medium leading-[0.84] tracking-tight">
                PARTNERS IN GROWTH
              </span>

              <Image
                src="/spin-icon.webp" 
                alt="divider"
                width={110}
                height={110}
                className="animate-[spin_30s_linear_infinite] mr-24 md:mr-32 max-sm:w-[28px] max-sm:h-[28px]"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
