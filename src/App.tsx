import { Portrait } from './features/Portrait/ui/Portrait'
import { Location } from './features/Location/ui/Location'
import { Timeline } from './features/Timeline/ui/Timeline'
import { DressCode } from './features/DressCode/ui/DressCode'
import { Questionnaire } from './features/Questionnaire/ui/Questionnaire'
import styles from './App.module.css'
import { useEffect, useRef } from 'react'

const Divider = () => {
  return <p className={styles.divider}>________________________</p>
}

export function Stars() {
  const ref = useRef<HTMLDivElement>(null)
  const starCount = 130

  useEffect(() => {
    const container = ref.current
    if (!container) return
    const stars: HTMLDivElement[] = []
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div')
      star.className = styles.star
      container.appendChild(star)
      stars.push(star)
    }
    function randomizeStar(star: HTMLDivElement) {
      star.style.top = `${Math.random() * 100}%`
      star.style.left = `${Math.random() * 100}%`
      star.style.animationDuration = `${1.5 + Math.random()}s`
      star.style.opacity = String(0.5 + Math.random() * 0.5)
    }
    // Изначально рандомизируем все
    stars.forEach(randomizeStar)
    // Периодически меняем позицию случайных звёзд
    const interval = setInterval(() => {
      const countToMove = Math.floor(Math.random() * 5) + 1
      for (let i = 0; i < countToMove; i++) {
        const idx = Math.floor(Math.random() * stars.length)
        randomizeStar(stars[idx])
      }
    }, 700)
    return () => {
      clearInterval(interval)
      stars.forEach(star => container.removeChild(star))
    }
  }, [])
  return <div className={styles['main-stars']} ref={ref} />
}


function App() {

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 300)
  }, [])


  return (
    <main>
      {/* <Stars /> */}
      <Portrait />
      <Divider />
      <Location />
      <Divider />
      <Timeline />
      <Divider />
      <DressCode />
      <Divider />
      <Questionnaire />
    </main>
  )
}

export default App
