import type { FC } from 'react'
import styles from './Portrait.module.css'
import portrait from './portrait.jpg?imagetools'
import portraitPreview from './portrait.jpg?quality=20&imagetools'
import { guessGender } from '../../../shared/guessGender'
import { useQueryParams } from '../../../shared/useQueryParams'
import { nbsp } from '../../../shared/nbsp'
import { Image } from '../../../shared/Image/Image'



const guests = [
  /** Сторона Вадима */
  ["Мама"], // 0
  ["Сава", "Рада"], // 1
  ["Женя", "Софа"], // 2
  ["Никита"], // 3
  ["Света", "Дима"], // 4
  ["Игорь", "София"], // 5
  ["Любовь", "Игорь"], // 6
  ["Сергей", "Любовь"], // 7
  ["Алена", "Андрей"], // 8
  ["Вика", "Кирилл"], // 9
  ["Сергей"], // 10

  /** Сторона Кристины */
  ["Мама", "Папа"], // 11
  ["Ева"], // 12
  [`Светлана${nbsp}Ивановна`, `Анатолий${nbsp}Петрович`], // 13
  ["Диана", "Егор"], // 14
  ["Диана", "Александр"], // 15
  ["Леся", "Лев"], // 16
  ["Арина"], // 17
  ["Ира"], // 18
  ["Наташа", "Евгений"], // 19
  ["Кристина"], // 20
  ["Оля", "Станислав"], // 21
  ["Марина", "Гриша"], // 22
  ["Марина", "Миша"], // 23

  [`Вера${nbsp}Евгениевна`, `Геннадий${nbsp}Борисович`], // 24
  [`Лидия`], // 25
  ['Анна'], // 26
  ['Марк', 'Саша'], // 27
  

] as const satisfies Array<[string] | [string, string]>

const getGuestInvitation = (id: string | null) => {
  const pair = guests[Number(id)]

  if (id === null || !pair) {
    return "Дорогие гости"
  }


  if (pair.length === 1) {
    const gender = guessGender(pair[0])

    if (gender === 'male') {
      return `Дорогой ${pair[0]}`
    }
    return `Дорогая ${pair[0]}`
  }

  return `Дорогие ${pair[0]} и ${pair[1]}`

}


export const Portrait: FC = () => {
  const queryParams = useQueryParams()
  const id = queryParams.get('id')

  return (
    <section className={styles.portrait}>
      <div className={styles.imageContainer}>
        <Image
          src={portrait}
          previewSrc={portraitPreview}
          alt="Портрет пары"
          className={styles.image}
          // priority

        />
        <h1 className={styles.ourNames}>Кристина {nbsp}{nbsp}&{nbsp}Вадим</h1>
      </div>
      <div className={styles.textContent}>
        <h1 className={styles.names}>{getGuestInvitation(id)}</h1>
        <h2 className={styles.subTitle}>
          В нашей жизни состоится важное и{nbsp}радостное
          событие{nbsp}-{nbsp}день свадьбы!
          Мы приглашаем вас разделить с нами этот особенный день!
        </h2>
        <p className={styles.city}>15 сентября 2025</p>
        <p className={styles.date}>Санкт-Петербург</p>
      </div>
    </section>
  )
} 