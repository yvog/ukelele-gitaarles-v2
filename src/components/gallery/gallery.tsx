import Carousel from 'react-elastic-carousel'
import styles from './gallery.module.scss'

const GalleryComponent: React.FC = () => {
  const images: string[] = [
    '/images/gallery/gallery.jpg',
    '/images/gallery/gallery.jpg',
    '/images/gallery/gallery.jpg',
    '/images/gallery/gallery.jpg',
    '/images/gallery/gallery.jpg',
    '/images/gallery/gallery.jpg',
  ]

  return (
    <section className={styles.gallery}>
      <Carousel
        itemsToShow={3}
        itemPadding={[16, 16, 16, 16]}
        transitionMs={250}
        pagination={false}
        disableArrowsOnEnd={false}
      >
        {images.map((src) => {
          return <img src={src} alt={src} width="250" height="150" />
        })}
      </Carousel>
    </section>
  )
}

export const Gallery = GalleryComponent
