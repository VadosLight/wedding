import type { FC } from 'react'
import styles from './Portrait.module.css'
import portrait from './portrait.jpg'

import { useMemo } from 'react';

export const useQueryParams = (): URLSearchParams => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => new URLSearchParams(window.location.search), [window.location.search]);
};

export function guessGender(name: string): 'male' | 'female' | 'unknown' {
  const lowerName = name.trim().toLowerCase();

  const femaleEndings = ['а', 'я', 'ия', 'льда', 'иня', 'ына', 'ю'];
  const maleEndings = ['й', 'н', 'р', 'в', 'д', 'м', 'т', 'л', 'г', 'б', 'п', "никита"];

  if (!name) return 'unknown';

  // Проверим на мужские окончания
  if (maleEndings.some(ending => lowerName.endsWith(ending))) {
    return 'male';
  }

  // Проверим на женские окончания
  if (femaleEndings.some(ending => lowerName.endsWith(ending))) {
    return 'female';
  }



  return 'unknown';
}

const guests = [
  ["Мама", "Папа"],
  ["Никита"],
  ["Кристина"],
] as const

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

  return `Дорогие ${pair.join(`${nbsp}и${nbsp}`)}`

}

const nbsp = "\u00A0"

export const Portrait: FC = () => {
  const queryParams = useQueryParams()
  const id = queryParams.get('id')

  return (
    <section className={styles.portrait}>
      <div className={styles.imageContainer}>
        <img
          src={portrait}
          alt="Портрет пары"
          className={styles.image}
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
        <p className={styles.date}>15 сентября 2025</p>
      </div>
    </section>
  )
} 