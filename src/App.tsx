import { type FC, useEffect } from 'react'
import { Portrait } from './features/Portrait/ui/Portrait'
import { Location } from './features/Location/ui/Location'
import { Timeline } from './features/Timeline/ui/Timeline'
import { DressCode } from './features/DressCode/ui/DressCode'
import { Questionnaire } from './features/Questionnaire/ui/Questionnaire'
import { SEO } from './shared/SEO/SEO'
import styles from './App.module.css'

const Divider: FC = () => {
  return <p className={styles.divider}>________________________</p>
}

const App: FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const timer = setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <SEO />
      <main>
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
    </>
  )
}

export default App
