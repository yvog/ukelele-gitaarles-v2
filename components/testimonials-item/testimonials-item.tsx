import styles from './testimonials-item.module.scss';

type TestimonialsItemProps = {
    name: string;
    age: number;
    content: string;
};

const TestimonialsItemComponent: React.FC<TestimonialsItemProps> = ({
    name,
    age,
    content
}) => {
    return (
        <article className={styles.testimonials_item}>
            <h3>{name}</h3>
            <span>{age} jaar</span>
            <p>{content}</p>
        </article>
    )
};

export const TestimonialsItem = TestimonialsItemComponent;