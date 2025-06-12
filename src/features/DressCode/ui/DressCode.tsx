import type { FC } from 'react'
import styles from './DressCode.module.css'

type DressCodeItem = {
  title: string
  description: string
  image: string
}

const dressCodeItems: DressCodeItem[] = [
  {
    title: 'Для дам',
    description: 'Вечерние платья в пастельных тонах',
    image: '/dress-code-women.jpg'
  },
  {
    title: 'Для господ',
    description: 'Классический костюм темных оттенков',
    image: '/dress-code-men.jpg'
  }
]

export const DressCode: FC = () => {
  return (
    <section className={styles.dressCode}>
      <h2 className={styles.title}>Дресс-код</h2>
      <div className={styles.grid}>
        {dressCodeItems.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.imageContainer}>
              <img 
                src={item.image} 
                alt={item.title} 
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 