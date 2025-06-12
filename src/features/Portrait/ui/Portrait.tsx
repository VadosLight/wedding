import { FC } from 'react'
import styles from './Portrait.module.css'

export const Portrait: FC = () => {
  return (
    <section className={styles.portrait}>
      <div className={styles.imageContainer}>
        <img 
          src="/couple-portrait.jpg" 
          alt="Портрет пары" 
          className={styles.image}
        />
      </div>
      <div className={styles.textContent}>
        <h1 className={styles.names}>Кристина & Вадим</h1>
        <p className={styles.date}>20.08.2024</p>
      </div>
    </section>
  )
} 