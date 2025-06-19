import type { ColorPalette, DressCodeItem } from './types'
import terra from '../ui/terra.png'

export const COLORS: ColorPalette[] = [
  {
    name: 'Зеленый',
    color: '#1f3a26',
    area: 'a'
  },
  {
    name: 'Черный',
    color: '#0d0f0d',
    area: 'b'
  },
  {
    name: 'Серый',
    color: '#636363',
    area: 'c'
  },
  {
    name: 'Зеленый светлый',
    color: '#7b896f',
    area: 'd'
  },
  {
    name: 'Синий',
    color: '#13273f',
    area: 'e'
  },
]

export const DRESS_CODE_ITEMS: DressCodeItem[] = [
  {
    title: 'Пожалуйста, приходите в красивой одежде, которая соотвествует торжественному настроению.',
    description: 'Мы будем рады, если вы поддержите цветовую палитру нашей свадьбы.',
    image: terra
  },
] 