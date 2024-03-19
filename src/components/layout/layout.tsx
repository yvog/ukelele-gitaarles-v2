import React from 'react';
import {
  AboutMeFullFragment,
  AboutMeSummaryFragment,
  ContactFormFragment,
  ContentBlockFragment,
  CostsCalculatorFragment,
  ExploreTrialLessonFragment,
  FooterFragment,
  HeroMainFragment,
  HeroServiceChoiceFragment,
  LayoutQuery,
  QuoteFragment,
  RepairMaintenanceFormFragment,
  RowHeaderNavigationFragment,
  ServicesContentFragment,
  SignUpFormFragment,
  TestimonialFragment,
  UspFragment,
} from '../../gql/graphql';
import { AboutMeFull } from '../about-me-full/about-me-full';
import { AboutMeSummary } from '../about-me-summary/about-me-summary';
import { ContentBlock } from '../content-block/content-block';
import { CostsCalculator } from '../costs-calculator/costs-calculator';
import { ExploreTrialLesson } from '../explore-trial-lesson/explore-trial-lesson';
import { Footer } from '../footer/footer';
import { ContactForm } from '../forms/contact-form/contact-form';
import { RepairMaintenanceForm } from '../forms/repair-maintenance-form/repair-maintenance-form';
import { SignUpForm } from '../forms/sign-up-form/sign-up-form';
import { HeroMain } from '../hero-main/hero-main';
import { HeroServiceChoice } from '../hero-service-choice/hero-service-choice';
import { Quote } from '../quote/quote';
import { RowHeaderNavigation } from '../row-header-navigation/row-header-navigation';
import { Services } from '../services/services';
import { Testimonials } from '../testimonials/testimonials';
import { Usp } from '../usp/usp';

type UnifiedComponentProps =
  | QuoteFragment
  | HeroMainFragment
  | ExploreTrialLessonFragment
  | UspFragment
  | AboutMeSummaryFragment
  | TestimonialFragment
  | FooterFragment
  | RowHeaderNavigationFragment
  | AboutMeFullFragment
  | ServicesContentFragment
  | HeroServiceChoiceFragment
  | ContentBlockFragment
  | RepairMaintenanceFormFragment
  | CostsCalculatorFragment
  | SignUpFormFragment
  | ContactFormFragment;

const availableComponents: Record<
  UnifiedComponentProps['__typename'],
  React.FC
> = {
  Quote: Quote,
  HeroMain: HeroMain,
  ExploreTrialLesson: ExploreTrialLesson,
  Usp: Usp,
  AboutMeSummary: AboutMeSummary,
  Testimonial: Testimonials,
  Footer: Footer,
  RowHeaderNavigation: RowHeaderNavigation,
  AboutMeFull: AboutMeFull,
  HeroServiceChoice: HeroServiceChoice,
  ServicesContent: Services,
  ContentBlock: ContentBlock,
  RepairMaintenanceForm: RepairMaintenanceForm,
  CostsCalculator: CostsCalculator,
  SignUpForm: SignUpForm,
  ContactForm: ContactForm,
};

export type LayoutProps = Pick<LayoutQuery['page'], 'layout'>;

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      {props.layout?.map((componentProps: UnifiedComponentProps) => {
        const componentType = componentProps.__typename;
        const Component = availableComponents?.[componentType];
        const key = `${componentType}-${componentProps?.id}`;

        if (!Component) {
          console.warn(`Could not render component: ${componentType}`);

          return <React.Fragment key={key}>{componentType}</React.Fragment>;
        }

        return <Component key={key} {...componentProps} />;
      })}
    </>
  );
};
