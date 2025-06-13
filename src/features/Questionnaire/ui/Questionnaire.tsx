import type { FC } from 'react'
import styles from './Questionnaire.module.css'


// const formUrl = 'https://forms.gle/z6M9qFiE2A2wN9ro8'

const iframeUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSenyQ0fbGR6cwIzFllchv2mMh8-_ciMe6VQtLghkjiEntqFjg/viewform'

export const Questionnaire: FC = () => {

  return (
    <section className={styles.questionnaire}>
      <h2 className={styles.title}>Уточняющие моменты</h2>
      {/* <a href={formUrl} target="_blank" rel="noopener noreferrer">
        <button className={styles.button}>Заполнить анкету</button>
      </a> */}
      <iframe
        className={styles.iframe}
        title='Анкета'
        src={iframeUrl}
      />
    </section>
  )
} 