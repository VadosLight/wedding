import type { FC } from 'react'
import { useState } from 'react'
import styles from './Questionnaire.module.css'

type FormData = {
  name: string
  attending: string
  guests: string
  dietaryRestrictions: string
}

export const Questionnaire: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    attending: '',
    guests: '',
    dietaryRestrictions: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ formData })
  }

  return (
    <section className={styles.questionnaire}>
      <h2 className={styles.title}>Подтвердите присутствие</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Имя и Фамилия</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="attending" className={styles.label}>Присутствие</label>
          <select
            id="attending"
            name="attending"
            value={formData.attending}
            onChange={handleChange}
            className={styles.select}
            required
          >
            <option value="">Выберите ответ</option>
            <option value="yes">Да, я приду</option>
            <option value="no">К сожалению, не смогу</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="guests" className={styles.label}>Количество гостей</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className={styles.input}
            min="1"
            max="5"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="dietaryRestrictions" className={styles.label}>Пищевые ограничения</label>
          <textarea
            id="dietaryRestrictions"
            name="dietaryRestrictions"
            value={formData.dietaryRestrictions}
            onChange={handleChange}
            className={styles.textarea}
            placeholder="Укажите, если есть"
          />
        </div>

        <button type="submit" className={styles.button}>
          Отправить
        </button>
      </form>
    </section>
  )
} 