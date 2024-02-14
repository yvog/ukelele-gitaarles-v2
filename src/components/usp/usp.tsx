import classNames from 'classnames';
import React from 'react';
import { UspFragment, UspItemFragment } from '../../gql/graphql';
import { UspItem } from '../usp-item/usp-item';
import styles from './usp.module.scss';

type UspProps = UspFragment;

export const Usp: React.FC<UspProps> = ({ items, compact }) => {
  return (
    <div className="main-container body">
      <section
        className={classNames(
          styles.usp,
          'container',
          compact ? styles.compact : ''
        )}
      >
        <div className={styles.usp_items}>
          {(items as UspItemFragment[])?.map((item) => (
            <UspItem key={`${item.__typename}-${item.id}`} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};
