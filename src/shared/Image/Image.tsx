import { type FC, useState, useEffect } from 'react'
import styles from './Image.module.css'

type ImageProps = {
  src: string
  previewSrc?: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export const Image: FC<ImageProps> = ({
  src,
  previewSrc,
  alt,
  width,
  height,
  className = '',
  priority = false
}) => {
  const [isLoading, setIsLoading] = useState(!priority)
  const [error, setError] = useState(false)
  const [isPreviewLoaded, setIsPreviewLoaded] = useState(false)
  const [isFullImageLoaded, setIsFullImageLoaded] = useState(false)

  useEffect(() => {
    if (priority) return

    if (previewSrc) {
      const previewImg = new window.Image()
      previewImg.src = previewSrc
      previewImg.onload = () => {
        setIsPreviewLoaded(true)
        setIsLoading(false)
      }
      previewImg.onerror = () => setError(true)
    }

    const fullImg = new window.Image()
    fullImg.src = src
    fullImg.onload = () => {
      setIsFullImageLoaded(true)
      setIsLoading(false)
    }
    fullImg.onerror = () => setError(true)
  }, [src, previewSrc, priority])

  if (error) {
    return (
      <div 
        className={`${styles.placeholder} ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt}
      >
        <span>Ошибка загрузки</span>
      </div>
    )
  }

  return (
    <div className={`${styles.wrapper} ${className}`} style={{ width, height }}>
      {isLoading && (
        <div className={styles.placeholder}>
          <div className={styles.shimmer} />
        </div>
      )}
      {previewSrc && isPreviewLoaded && !isFullImageLoaded && (
        <img
          src={previewSrc}
          alt={alt}
          width={width}
          height={height}
          className={`${styles.image} ${styles.preview}`}
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        className={`${styles.image} ${isLoading ? styles.loading : ''} ${isFullImageLoaded ? styles.loaded : ''}`}
      />
    </div>
  )
} 