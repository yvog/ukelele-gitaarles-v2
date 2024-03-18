import classnames from 'classnames';
import { useEffect, useState } from 'react';
import { Keyboard, Navigation, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import iconQuote from '../../../public/images/background/quote.svg';
import iconChevronLeft from '../../../public/images/icon/icon_chevron_left.svg';
import iconChevronRight from '../../../public/images/icon/icon_chevron_right.svg';
import {
  ButtonFragment,
  TestimonialFragment,
  TestimonialItemFragment,
} from '../../gql/graphql';
import { isBrowser } from '../../util/client';
import { Button } from '../button/button';
import { TestimonialItem } from '../testimonial-item/testimonial-item';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/virtual';

import styles from './testimonials.module.scss';

type TestimonialsProps = TestimonialFragment;

export const Testimonials: React.FC<TestimonialsProps> = ({
  testimonialsTitle,
  testimonials,
  testimonialsButton,
}) => {
  const { slug, label } = testimonialsButton as ButtonFragment;
  const defaultSlidesPerView = 3;
  const [slidesPerView, setSlidesPerView] =
    useState<number>(defaultSlidesPerView);

  useEffect(() => {
    if (!isBrowser) return;

    const updateSlidesPerView = () => {
      setSlidesPerView(
        window.innerWidth <= 1100
          ? window.innerWidth < 768
            ? 1
            : 2
          : defaultSlidesPerView
      );
    };

    updateSlidesPerView();

    window.addEventListener('resize', updateSlidesPerView);

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

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
              keyboard={{
                enabled: true,
                onlyInViewport: true,
              }}
              resizeObserver
              autoHeight
              spaceBetween={40}
              slidesPerView={slidesPerView}
              navigation={{
                prevEl: '#swiper-prev',
                nextEl: '#swiper-next',
              }}
              direction="horizontal"
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
