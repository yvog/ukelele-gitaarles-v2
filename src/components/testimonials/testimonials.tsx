import classnames from 'classnames'
import { useEffect, useState } from 'react'
import { Navigation, Virtual } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/virtual'
import { Swiper, SwiperSlide } from 'swiper/react'
import iconChevronLeft from '../../../public/images/icon/icon_chevron_left.svg'
import iconChevronRight from '../../../public/images/icon/icon_chevron_right.svg'
import { Button } from '../button/button'
import styles from './testimonials.module.scss'
import iconQuote from '../../../public/images/background/quote.svg'

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

  const defaultSlidesPerView = 3
  const [slidesPerView, setSlidesPerView] = useState<number>()

  const updateSlidesPerView = () =>
    setSlidesPerView(
      window.innerWidth <= 1100 ? (window.innerWidth < 768 ? 1 : 2) : defaultSlidesPerView
    )

  useEffect(() => {
    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView)
    return () => window.removeEventListener('resize', updateSlidesPerView)
  }, [slidesPerView, updateSlidesPerView])

  return (
    <section className={styles.testimonials}>
      <h2 className="hidden">Testimonials</h2>
      <img
        src="/images/background/blue_background.webp"
        alt="blue background"
        loading="lazy"
        width={446}
        height={300}
        className={classnames('section_background', styles.testimonials_background)}
      />

      <object data={iconQuote} width="64" height="64" className={styles.quote} aria-hidden="true">
        quote
      </object>

      <div className={classnames(styles.testimonials_inner, 'main-container')}>
        <h2>Anderen zijn je voorgegaan</h2>

        <div className={styles.swiper_outer_container}>
          <button id="swiper-prev" name="Navigate back" aria-label="Navigate back">
            <object data={iconChevronLeft} aria-hidden="true">
              chevron left
            </object>
          </button>
          <div className={styles.swiper_container}>
            <Swiper
              modules={[Navigation, Virtual]}
              autoHeight
              resizeObserver
              spaceBetween={50}
              slidesPerView={slidesPerView}
              navigation={{
                prevEl: '#swiper-prev',
                nextEl: '#swiper-next',
              }}
              virtual
              direction="horizontal"
              watchSlidesProgress
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={item.name} virtualIndex={index}>
                  <article className={styles.testimonials_item}>
                    <h3>{item.name}</h3>
                    <p>{item.content}</p>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button id="swiper-next" aria-label="Navigate forward" name="Navigate forward">
            <object data={iconChevronRight} aria-hidden="true">
              chevron right
            </object>
          </button>
        </div>
        <div className={styles.button}>
          <Button href="/aanmelden">Start met muziek maken</Button>
        </div>
      </div>
    </section>
  )
}

export const Testimonials = TestimonialsComponent
