
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne'; 
import HeroAreaHomeOne from './HeroAreaHomeOne';
import FeaturesAreaHomeOne from './FeaturesAreaHomeOne';
import ServiceAreaHomeOne from './ServiceAreaHomeOne';
import IntegrationsAreaHomeOne from './IntegrationsAreaHomeOne';
import TestimonialAreaHomeOne from './TestimonialAreaHomeOne';
import PricingAreaHomeOne from './PricingAreaHomeOne';
import FaqAreaHomeOne from './FaqAreaHomeOne';
import CtaAreaHomeOne from './CtaAreaHomeOne';
 

const HomeOne = () => {
  return (
    <>
      <HeaderOne /> 
      <HeroAreaHomeOne />
      <FeaturesAreaHomeOne />
      <ServiceAreaHomeOne />
      <IntegrationsAreaHomeOne />
      <TestimonialAreaHomeOne />
      <PricingAreaHomeOne />
      <FaqAreaHomeOne />
      <CtaAreaHomeOne />
      <FooterOne />
    </>
  );
};

export default HomeOne;