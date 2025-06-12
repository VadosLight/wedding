import type { FC } from 'react'
import styles from './Questionnaire.module.css'


const formUrl = 'https://forms.gle/z6M9qFiE2A2wN9ro8'

export const Questionnaire: FC = () => {

  return (
    <section className={styles.questionnaire}>
      <h2 className={styles.title}>Уточняющие моменты</h2>
      <a href={formUrl} target="_blank" rel="noopener noreferrer">
        <button className={styles.button}>Заполнить анкету</button>
      </a>
    </section>
  )
} 