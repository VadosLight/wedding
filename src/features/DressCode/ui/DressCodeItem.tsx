import type { FC } from 'react'
import { memo } from 'react'
import type { DressCodeItem as DressCodeItemType } from '../model/types'
import styles from './DressCode.module.css'
import { Image } from '../../../shared/Image/Image'

type DressCodeItemProps = {
  item: DressCodeItemType
}

export const DressCodeItem: FC<DressCodeItemProps> = memo(({ item }) => {
  return (
    <div className={styles.item}>
      <div className={styles.imageContainer}>
        <Image 
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
  )
}) 