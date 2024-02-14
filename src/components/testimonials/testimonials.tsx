import classnames from 'classnames';
import { useEffect, useState } from 'react';
import { Keyboard, Navigation, Virtual } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/virtual';
import { Swiper, SwiperSlide } from 'swiper/react';
import iconQuote from '../../../public/images/background/quote.svg';
import iconChevronLeft from '../../../public/images/icon/icon_chevron_left.svg';
import iconChevronRight from '../../../public/images/icon/icon_chevron_right.svg';
import {
  ButtonFragment,
  TestimonialFragment,
  TestimonialItemFragment,
} from '../../gql/graphql';
import { Button } from '../button/button';
import { TestimonialItem } from '../testimonial-item/testimonial-item';
import styles from './testimonials.module.scss';

type TestimonialsProps = TestimonialFragment & {
  testimonialsButton: ButtonFragment;
};

export const Testimonials: React.FC<TestimonialsProps> = ({
  testimonialsTitle,
  testimonials,
  testimonialsButton: { slug, label },
}) => {
  const defaultSlidesPerView = 3;
  const [slidesPerView, setSlidesPerView] = useState<number>();

  const updateSlidesPerView = () =>
    setSlidesPerView(
      window.innerWidth <= 1100
        ? window.innerWidth < 768
          ? 1
          : 2
        : defaultSlidesPerView
    );

  useEffect(() => {
    if (typeof window == 'undefined') return;

    updateSlidesPerView();

    window.addEventListener('resize', updateSlidesPerView);

    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, [testimonials]);

  return (
    <section className={styles.testimonials}>
      <img
        src="/images/background/blue_background.webp"
        alt="blue background"
        loading="lazy"
        width={446}
        height={300}
        className="section_background"
      />
      <object
        data={iconQuote}
        width="64"
        height="64"
        className={styles.quote}
        aria-hidden="true"
        tabIndex={-1}
      >
        quote
      </object>

      <div className={classnames(styles.testimonials_inner, 'main-container')}>
        <h2>{testimonialsTitle}</h2>

        <div className={styles.swiper_outer_container}>
          <button
            id="swiper-prev"
            name="Navigeer terug"
            aria-label="Navigeer terug"
            tabIndex={0}
          >
            <>
              <object data={iconChevronLeft} aria-hidden="true" tabIndex={-1}>
                chevron left
              </object>
            </>
          </button>
          <div className={styles.swiper_container}>
            <Swiper
              modules={[Navigation, Virtual, Keyboard]}
              autoHeight
              keyboard={{
                enabled: true,
                onlyInViewport: true,
              }}
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
              {(testimonials as TestimonialItemFragment[])?.map(
                (item, index) => (
                  <SwiperSlide key={item.name} virtualIndex={index}>
                    <TestimonialItem {...item} />
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
          <button
            id="swiper-next"
            aria-label="Navigeer verder"
            name="Navigeer verder"
            tabIndex={0}
          >
            <>
              <object data={iconChevronRight} aria-hidden="true" tabIndex={-1}>
                chevron right
              </object>
            </>
          </button>
        </div>
        <div className={styles.button}>
          <Button href={slug}>{label}</Button>
        </div>
      </div>
    </section>
  );
};
