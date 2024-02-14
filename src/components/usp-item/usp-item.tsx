import { UspItemFragment } from '../../gql/graphql';
import { icons } from '../icons/icons';
import styles from './usp-item.module.scss';

type UspItemProps = UspItemFragment;

export const UspItem: React.FC<UspItemProps> = ({ icon, text }) => {
  return (
    <div className={styles.usp_item}>
      <object
        data={icons[icon]}
        type="image/svg+xml"
        className={styles.icon}
        aria-hidden="true"
        tabIndex={-1}
      >
        usp icon
      </object>
      <p>{text}</p>
    </div>
  );
};
