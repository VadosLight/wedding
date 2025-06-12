import { Portrait } from './features/Portrait/ui/Portrait'
import { Location } from './features/Location/ui/Location'
import { Timeline } from './features/Timeline/ui/Timeline'
import { DressCode } from './features/DressCode/ui/DressCode'
import { Questionnaire } from './features/Questionnaire/ui/Questionnaire'
import styles from './App.module.css'

const Divider = () => {
  return <p className={styles.divider}>________________________</p>
}

function App() {
  return (
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
      <Divider />
    </main>
  )
}

export default App
