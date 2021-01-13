import {HeaderNavigation, HeroWrapper} from '..';
import styles from './hero-service-choice.module.scss';

type HeroServiceChoiceComponentProps = {
    children: React.ReactNode;
};

const HeroServiceChoiceComponent: React.FC<HeroServiceChoiceComponentProps> = ({
    children
}) => {
    return (
        <HeroWrapper forceMinHeight={900} classes={[styles.hero_service_choice]} blue={true}>
            <HeaderNavigation />

            {children}

        </HeroWrapper>
    );
};

export const HeroServiceChoice = HeroServiceChoiceComponent;