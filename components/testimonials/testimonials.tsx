import classnames from 'classnames'
import { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { TestimonialsItem } from '..'
import { Button } from '../button/button'
import styles from './testimonials.module.scss'

type TestimonialData = {
  name: string
  age: number
  content: string
}

const TestimonialsComponent: React.FC = () => {
  const testimonials: TestimonialData[] = [
    {
      name: 'Rosa van Dalen',
      age: 50,
      content:
        'Ik kon hiervoor nog geen instrument aanraken. Nu heb ik er heel veel plezier in en wordt ik steeds beter!',
    },
    {
      name: 'Rosa van Daal',
      age: 12,
      content:
        'Ik kon hiervoor nog geen instrument aanraken. Nu heb ik er heel veel plezier in en wordt ik steeds beter!',
    },
    {
      name: 'Daal van Rosen',
      age: 6,
      content:
        'Ik kon hiervoor nog geen instrument aanraken. Nu heb ik er heel veel plezier in en wordt ik steeds beter!',
    },
    {
      name: 'Rosa den Dal',
      age: 35,
      content:
        'Ik kon hiervoor nog geen instrument aanraken. Nu heb ik er heel veel plezier in en wordt ik steeds beter!',
    },
  ]

  const [itemsToShow, setItemsToShow] = useState<number>(3)

  useEffect(() => {
    function updateItemsToShow() {
      if (window.innerWidth <= 760) {
        setItemsToShow(1)
      } else {
        setItemsToShow(3)
      }
    }

    updateItemsToShow()

    window.addEventListener('resize', updateItemsToShow)

    return () => window.removeEventListener('resize', updateItemsToShow)
  }, [itemsToShow])

  return (
    <section className={styles.testimonials}>
      <picture>
        <source media="(min-width:1200px)" srcSet="/images/background/testimonials_background.png" />
        <source media="(min-width:992px)" srcSet="/images/background/testimonials_background.png" />
        <source media="(min-width:0)" srcSet="/images/background/testimonials_background.png" />
        <img
          src="/images/background/testimonials_background.png"
          loading="lazy"
          alt="blue "
          className={classnames('section_background')}
        />
      </picture>

      <div className={styles.testimonials_inner}>
        <h4>Anderen zijn je voorgegaan</h4>

        <Carousel
          itemsToShow={itemsToShow}
          itemPadding={[16, 16, 16, 0]}
          transitionMs={200}
          pagination={false}
          disableArrowsOnEnd={false}
        >
          {testimonials.map((item, i) => {
            return <TestimonialsItem key={i} name={item.name} age={item.age} content={item.content} />
          })}
        </Carousel>

        <Button href="/aanmelden">Begin met muziek maken</Button>
      </div>
    </section>
  )
}

export const Testimonials = TestimonialsComponent
