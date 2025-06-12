import type { FC } from 'react'
import styles from './Location.module.css'
import first from './1.jpg'
import second from './2.jpg'
import third from './3.jpg'
// import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

// const ZAGS_COORDINATES = [59.933961, 30.293878];
// const VINITY_FOREST_COORDINATES = [59.715735, 29.421267];

// const LocationMap = () => {
//       return  <YMaps>
//           <Map defaultState={{ center: ZAGS_COORDINATES, zoom: 8 }}
//             height={"100%"}
//             width={"100%"}
//             options={{

//             }}
//           >
//             <Placemark geometry={ZAGS_COORDINATES} />
//             <Placemark geometry={VINITY_FOREST_COORDINATES} />
//           </Map>
//         </YMaps>
// }


const Preview = () => {
  return <div className={styles.preview}>
    <img src={second} className={styles.previewImage} alt="Preview" />
    <img src={first} className={styles.previewImage} alt="Preview" />
    <img src={third} className={styles.previewImage} alt="Preview" />
  </div>
}

export const Location: FC = () => {
  return (
    <section className={styles.location}>
      <div className={styles.textContent}>
        {/* <h2 className={styles.title}>Место начала</h2>
        <p className={styles.address}>Дворец бракосочетания № 1</p>
        <p className={styles.address}>Английская набережная, 28</p>

        <h2 className={styles.title}>___</h2> */}

        <h2 className={styles.title}>Место проведения</h2>
        <h3 className={styles.addressName}>Vinity Amore</h3>
        <p className={styles.address}>Ленинградская область, Ломоносовский район, Лопухинское сельское поселение</p>
      </div>
      <Preview />
      {/* <div className={styles.mapContainer}>

      </div> */}
    </section>
  )
} 