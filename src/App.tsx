import './App.css'
import { Portrait } from './features/Portrait/ui/Portrait'
import { Location } from './features/Location/ui/Location'
import { Timeline } from './features/Timeline/ui/Timeline'
import { DressCode } from './features/DressCode/ui/DressCode'
import { Questionnaire } from './features/Questionnaire/ui/Questionnaire'

function App() {
  return (
    <main>
      <Portrait />
      <Location />
      <Timeline />
      <DressCode />
      <Questionnaire />
    </main>
  )
}

export default App
