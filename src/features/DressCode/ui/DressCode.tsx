import type { FC } from 'react'
import styles from './DressCode.module.css'
import terra from './terra.png'
import { Image } from '../../../shared/Image/Image'

const dressCodeItem = {
  title: 'Пожалуйста, приходите в красивой одежде, которая соотвествует торжественному настроению.',
  description: 'Мы будем рады, если вы поддержите цветовую палитру нашей свадьбы.',
  image: ''
}

export const DressCode: FC = () => {
  return (
    <section className={styles.dressCode}>
      <h2 className={styles.title}>Дресс-код</h2>
      <div className={styles.grid} style={{ justifyContent: 'center', display: 'flex' }}>
        <div className={styles.item}>
          <div className={styles.imageContainer}>
            <Image 
              src={terra} 
              alt={dressCodeItem.title} 
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h3 className={styles.itemTitle}>{dressCodeItem.title}</h3>
            <p className={styles.description}>{dressCodeItem.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
} 