import type { FC } from 'react'
import styles from './Portrait.module.css'
import portrait from './portrait.jpg'

export const Portrait: FC = () => {
  return (
    <section className={styles.portrait}>
      <div className={styles.imageContainer}>
        <img 
          src={portrait} 
          alt="Портрет пары" 
          className={styles.image}
        />
      </div>
      <div className={styles.textContent}>
        <h1 className={styles.names}>Кристина & Вадим</h1>
        <p className={styles.date}>15.09.2025</p>
      </div>
    </section>
  )
} 