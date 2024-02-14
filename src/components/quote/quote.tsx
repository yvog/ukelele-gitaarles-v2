import classNames from 'classnames';
import React from 'react';
import { QuoteFragment } from '../../gql/graphql';
import styles from './quote.module.scss';

type QuoteProps = QuoteFragment;

export const Quote: React.FC<QuoteProps> = ({ quote }) => {
  return (
    <div className="main-container body">
      <section className={classNames(styles.quote, 'container')}>
        <h2>{quote}</h2>
      </section>
    </div>
  );
};
