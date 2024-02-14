import { TestimonialItemFragment } from '../../gql/graphql';
import styles from './testimonial-item.module.scss';

type TestimonialItemProps = TestimonialItemFragment;

export const TestimonialItem: React.FC<TestimonialItemProps> = ({
  name,
  text,
}) => {
  return (
    <article className={styles.testimonial_item}>
      <h3>{name}</h3>
      <p>{text}</p>
    </article>
  );
};
