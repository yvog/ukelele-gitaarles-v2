import {useEffect} from 'react';
import Carousel from 'react-elastic-carousel';
import {TestimonialsItem} from '..';
import {Button} from '../button/button';
import styles from './testimonials.module.scss';

type TestimonialData = {
    name: string;
    age: number;
    content: string;
};

export const TestimonialsComponent: React.FC = () => {

    const testimonials: TestimonialData[] = [
        {
            "name": "Rosa van Dalen",
            "age": 50,
            "content": "Ik kon hiervoor nog geen instrument aanraken. Nu heb ik er heel veel plezier in en wordt ik steeds beter!"
        },
        {
            "name": "Rosa van Daal",
            "age": 12,
            "content": "Ik kon hiervoor nog geen instrument aanraken. Nu heb ik er heel veel plezier in en wordt ik steeds beter!"
        },
        {
            "name": "Daal van Rosen",
            "age": 6,
            "content": "Ik kon hiervoor nog geen instrument aanraken. Nu heb ik er heel veel plezier in en wordt ik steeds beter!"
        },
        {
            "name": "Rosa den Dal",
            "age": 35,
            "content": "Ik kon hiervoor nog geen instrument aanraken. Nu heb ik er heel veel plezier in en wordt ik steeds beter!"
        },
    ];

    useEffect(() => {
        // 
    }, []);

    return (
        <section className={styles.testimonials}>
            <div className={styles.testimonials_inner}>

                <h4>Anderen zijn je voorgegaan</h4>

                <Carousel
                    itemsToShow={3}
                    itemPadding={[16, 16, 16, 0]}
                    transitionMs={250}
                    pagination={false}
                    disableArrowsOnEnd={false}
                >
                    {testimonials.map((item) => {
                        return <TestimonialsItem name={item.name} age={item.age} content={item.content} />;
                    })}
                </Carousel>

                <Button href="/aanmelden">Begin met muziek maken</Button>

            </div>
        </section>
    )
};

export const Testimonials = TestimonialsComponent;