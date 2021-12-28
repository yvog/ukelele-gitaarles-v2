import classnames from 'classnames'
import { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { TestimonialsItem } from '..'
import { Button } from '../button/button'
import styles from './testimonials.module.scss'

type TestimonialData = {
  name: string
  content: string
}

const TestimonialsComponent: React.FC = () => {
  const testimonials: TestimonialData[] = [
    {
      name: 'Samira',
      content:
        'Bert is een fijne leraar. Hij zoekt goede boeken uit en dankzij hem kan ik nu aardig piano spelen. Hij zoekt liedjes uit die passen bij de feestdagen en mijn niveau. En als liedjes te moeilijk zijn, past hij ze aan en maakt hij er een eigen versie van die ik wel kan spelen. Het is ook erg fijn dat hij gewoon bij ons thuis komt. Samenspelen klinkt ook erg mooi!',
    },
    {
      name: 'Annelinde',
      content:
        'Ik vind Bert Geldhof een hele fijne en geduldige meester. Hij legt alles goed en duidelijk uit. Ik ben nu 11 jaar. Ik heb al 3 jaar lang ukulele les van hem en ben nu net begonnen met gitaarles.',
    },
    {
      name: 'Marjolein en Iris',
      content:
        'Mijn dochter zit nu al een tijdje op les. Bert geeft heel leuk les aan kinderen. Dit gaat op het tempo van het kind wat heel fijn is. Er is ook ruimte om een liedje te leren spelen wat je zelf wil. In de tussentijd bespreek ik dit met mijn dochter en vraag wat zij van de lessen vind. Ze steekt een dikke duim omhoog. Bert komt aan huis: heerlijk en handig als je een druk schema hebt en in de zomer zitten we gezellig in de tuin met les. Ook krijg ik zelf piano les. Heel fijn dat dit te combineren is met de gitaarles van mijn dochter. We krijgen privéles. Dat vind ik zelf prettiger dan in een groepje: zo kan je op je eigen niveau ontwikkelen.',
    },
    {
      name: 'Rosanne',
      content:
        'Inmiddels heb ik al ruim 2.5 jaar les van Bert. Hij heeft mij veel liedjes geleerd en daar ben ik blij mee. Ik leer iedere keer een stukje meer. Als je een bepaalt liedje wilt spelen zoekt hij de noten er voor je bij. Het klinkt steeds mooier en ik vind het leuk om met hem samen te spelen. Zowel met ukelele als met de gitaar staat hij voor mij klaar!',
    },
  ]

  const defaultItemsToShow = 2
  const [itemsToShow, setItemsToShow] = useState<number>(defaultItemsToShow)
  const [slidesPerView, setSlidesPerView] = useState<number>()

  const updateItemsToShow = () => {
    if (window.innerWidth <= 760) {
      setItemsToShow(1)
    } else {
      setItemsToShow(defaultItemsToShow)
    }
  }

  useEffect(() => {
    updateItemsToShow()

    window.addEventListener('resize', updateItemsToShow)
    return () => window.removeEventListener('resize', updateItemsToShow)
  }, [itemsToShow, updateItemsToShow])

  return (
    <section className={styles.testimonials}>
      <img
        src="/images/background/blue_background.webp"
        alt="blue background"
        loading="lazy"
        width={446}
        height={300}
        className={classnames('section_background', styles.testimonials_background)}
      />

      <img
        src="/images/background/quote.svg"
        alt="quote"
        loading="lazy"
        width={64}
        height={64}
        className={styles.quote}
      />

      <div className={styles.testimonials_inner}>
        <h4>Anderen zijn je voorgegaan</h4>

        <Carousel
          itemsToShow={itemsToShow}
          itemPadding={[16, 16, 16, 0]}
          transitionMs={150}
          pagination={false}
          disableArrowsOnEnd={false}
        >
          {testimonials.map((item, i) => {
            return <TestimonialsItem key={i} name={item.name} content={item.content} />
          })}
        </Carousel>

        <div className={styles.button}>
          <Button href="/aanmelden">Start met muziek maken</Button>
        </div>
      </div>
    </section>
  )
}

export const Testimonials = TestimonialsComponent
