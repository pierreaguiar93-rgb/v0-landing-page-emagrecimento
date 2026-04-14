"use client"

import { useState, useEffect } from "react"

export function CountdownTimer() {
  const [time, setTime] = useState({
    hours: 2,
    minutes: 47,
    seconds: 33
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        let { hours, minutes, seconds } = prev
        
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        }

        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatNumber = (num: number) => num.toString().padStart(2, "0")

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex flex-col items-center">
        <div className="bg-primary text-primary-foreground font-bold text-2xl md:text-3xl px-3 py-2 rounded-lg min-w-[60px] text-center">
          {formatNumber(time.hours)}
        </div>
        <span className="text-xs text-muted-foreground mt-1">Horas</span>
      </div>
      <span className="text-primary text-2xl font-bold">:</span>
      <div className="flex flex-col items-center">
        <div className="bg-primary text-primary-foreground font-bold text-2xl md:text-3xl px-3 py-2 rounded-lg min-w-[60px] text-center">
          {formatNumber(time.minutes)}
        </div>
        <span className="text-xs text-muted-foreground mt-1">Minutos</span>
      </div>
      <span className="text-primary text-2xl font-bold">:</span>
      <div className="flex flex-col items-center">
        <div className="bg-primary text-primary-foreground font-bold text-2xl md:text-3xl px-3 py-2 rounded-lg min-w-[60px] text-center">
          {formatNumber(time.seconds)}
        </div>
        <span className="text-xs text-muted-foreground mt-1">Segundos</span>
      </div>
    </div>
  )
}
