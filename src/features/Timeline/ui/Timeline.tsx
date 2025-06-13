import type { FC } from 'react'
import styles from './Timeline.module.css'
import { nbsp } from '../../../shared/nbsp'
import { hyphen } from '../../../shared/hyphen'

type TimelineEvent = {
  time: string
  title: string
  description: string
}

const events: TimelineEvent[] = [
  {
    time: '15:00',
    title: `Роспись ЗАГС${nbsp}№${nbsp}1${nbsp}`,
    description: `Санкт-Петербург, Английская набережная,${nbsp}28`
  },
  {
    time: '16:00',
    title: 'Выезд на площадку',
    description: 'Vinity Amore'
  },
  {
    time: '17:30',
    title: 'Фуршет',
    description: 'Перекус для поднятия боевого духа'
  },
  {
    time: '18:00',
    title: 'Выездная регистрация',
    description: 'Подготовьтесь плакать'
  },
  {
    time: '18:30',
    title: 'Начало банкета',
    description: 'Поехали'
  },
  {
    time: '22:00',
    title: 'Торт',
    description: 'Сладкие моменты'
  },
  {
    time: '23:30',
    title: 'Конец мероприятия',
    description: `Автобус в Гатчину и Санкт${hyphen}Петербург`
  } 
]

export const Timeline: FC = () => {
  return (
    <section className={styles.timeline}>
      <h2 className={styles.title}>Расписание</h2>
      <div className={styles.eventsGrid}>
        {events.map((event) => (
          <div key={event.time} className={styles.event}>
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