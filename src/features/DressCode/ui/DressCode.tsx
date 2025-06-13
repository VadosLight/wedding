import type { FC } from 'react'
import styles from './DressCode.module.css'
import terra from './terra.png'

type DressCodeItem = {
  title: string
  description: string
  image: string
}

// const colors = [
//   {
//     name: 'Зеленый',
//     color: '#1f3a26',
//     area: 'a'
//   },
//   {
//     name: 'Черный',
//     color: '#0d0f0d',
//     area: 'b'
//   },
//   {
//     name: 'Серый',
//     color: '#636363',
//     area: 'c'
//   },
//   {
//     name: 'Зеленый светлый',
//     color: '#7b896f',
//     area: 'd'
//   },
//   {
//     name: 'Синий',
//     color: '#13273f',
//     area: 'e'
//   },
// ]

const dressCodeItems: DressCodeItem[] = [
  {
    title: 'Пожалуйста, приходите в красивой одежде, которая соотвествует торжественному настроению.',
    description: 'Мы будем рады, если вы поддержите цветовую палитру нашей свадьбы.',
    image: ''
  },
  // {
  //   title: 'Для господ',
  //   description: 'Классический костюм темных оттенков',
  //   image: '/dress-code-men.jpg'
  // }
]

export const DressCode: FC = () => {
  return (
    <section className={styles.dressCode}>
      <h2 className={styles.title}>Дресс-код</h2>
      <div className={styles.grid}>
        {dressCodeItems.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.imageContainer}>
              {/* <div className={styles.colors}>
                {colors.map((color) => (
                  <div key={color.name}
                    className={styles.color}
                    style={{ backgroundColor: color.color, gridArea: color.area }}></div>
                ))}
              </div> */}
              <img 
                src={terra} 
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