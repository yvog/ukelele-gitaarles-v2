import classNames from 'classnames';
import Image from 'next/image';
import { ContentBlockFragment } from '../../gql/graphql';
import { transformHygraphImage } from '../../util/client';
import { Button } from '../button/button';
import { icons } from '../icons/icons';
import styles from './content-block.module.scss';

type ContentBlockProps = Partial<
  Omit<ContentBlockFragment, '__typename' | 'id'>
> & {
  assetClassName?: string;
  assetPriority?: boolean;
};

export const ContentBlock: React.FC<ContentBlockProps> = ({
  contentBlockTitle,
  icon,
  image,
  button,
  swapOnMobile,
  text,
  assetWidth,
  assetHeight,
  assetClassName,
  assetPriority = false,
}) => {
  return (
    <section
      className={classNames('main-container body', styles.content_block)}
    >
      {contentBlockTitle && <h2>{contentBlockTitle}</h2>}

      <div
        className={classNames(styles.content_block_row, {
          [styles.swapOnMobile]: swapOnMobile,
        })}
      >
        <div
          className={classNames(styles.content_block_row_content, {
            [styles.no_asset]: !image && !icon,
          })}
        >
          {text && <div dangerouslySetInnerHTML={{ __html: text?.html }} />}
          {button && (
            <Button filled={button?.filled} href={button?.slug}>
              {button?.label}
            </Button>
          )}
        </div>

        <div className={styles.asset}>
          {image && (
            <div className={assetClassName}>
              <Image
                src={transformHygraphImage(image?.url, assetWidth, assetHeight)}
                alt={contentBlockTitle}
                width={assetWidth}
                height={assetHeight}
                priority={assetPriority}
                layout="fixed"
                objectFit="cover"
                quality={100}
              />
            </div>
          )}

          {icon && (
            <object
              data={icons[icon]}
              width={assetWidth}
              height={assetHeight}
              aria-hidden="true"
              tabIndex={-1}
              className={assetClassName}
            >
              icon
            </object>
          )}
        </div>
      </div>
    </section>
  );
};
