import {
  NavigationItemFragment,
  RowHeaderNavigationFragment,
} from '../../gql/graphql';
import { HeaderNavigation } from '../header-navigation/header-navigation';

type RowHeaderNavigationProps = RowHeaderNavigationFragment;

export const RowHeaderNavigation: React.FC<RowHeaderNavigationProps> = ({
  mainNavigation,
}) => {
  return (
    <div className="main-container header">
      <HeaderNavigation
        items={mainNavigation.items as NavigationItemFragment[]}
        variant="black"
      />
    </div>
  );
};
