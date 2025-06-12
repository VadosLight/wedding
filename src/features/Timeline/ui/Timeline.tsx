import type { FC } from 'react'
import styles from './Timeline.module.css'

type TimelineEvent = {
  time: string
  title: string
  description: string
}

const events: TimelineEvent[] = [
  {
    time: '17:00',
    title: 'Встреча гостей',
    description: 'Приветственные напитки и закуски'
  },
  {
    time: '17:30',
    title: 'Церемония',
    description: 'Торжественная церемония бракосочетания'
  },
  {
    time: '18:30',
    title: 'Праздничный ужин',
    description: 'Изысканное меню и развлекательная программа'
  },
  {
    time: '22:00',
    title: 'Торт',
    description: 'Десерт и танцы'
  }
]

export const Timeline: FC = () => {
  return (
    <section className={styles.timeline}>
      <h2 className={styles.title}>Расписание</h2>
      <div className={styles.eventsGrid}>
        {events.map((event, index) => (
          <div key={index} className={styles.event}>
            <div className={styles.time}>{event.time}</div>
            <div className={styles.content}>
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <p className={styles.description}>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 