import styles from './testimonials-item.module.scss'

type TestimonialsItemProps = {
  name: string
  content: string
}

const TestimonialsItemComponent: React.FC<TestimonialsItemProps> = ({ name, content }) => {
  return (
    <article className={styles.testimonials_item}>
      <h3>{name}</h3>
      <p>{content}</p>
    </article>
  )
}

export const TestimonialsItem = TestimonialsItemComponent
