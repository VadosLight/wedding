import type { FC } from 'react'
import styles from './Location.module.css'

export const Location: FC = () => {
  return (
    <section className={styles.location}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>Место проведения</h2>
        <p className={styles.address}>Ресторан "Белый Замок"</p>
        <p className={styles.address}>ул. Пушкина, д. 10</p>
        <p className={styles.time}>17:00</p>
      </div>
      <div className={styles.mapContainer}>
        <img 
          src="/map-location.jpg" 
          alt="Карта места проведения" 
          className={styles.map}
        />
      </div>
    </section>
  )
} 