 
import AboutAreaHomeOne from './AboutAreaHomeOne';
import CounterAreaHomeOne from './CounterAreaHomeOne';
import HeroAreaHomeOne from './HeroAreaHomeOne'; 
import HeaderOne from '@/layouts/headers/HeaderOne'; 
import ServiceAreaHomeOne from './ServiceAreaHomeOne';
import GuideAreaHomeOne from './GuideAreaHomeOne';
import BrandsAreaHomeOne from './BrandsAreaHomeOne';
import TestimonialAreaHomeOne from './TestimonialAreaHomeOne';
import OurProcessHomeOne from './OurProcessHomeOne';
import PriceingHomeOne from './PriceingHomeOne';
import BlogAreaHomeOne from './BlogAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <HeroAreaHomeOne /> 
      <CounterAreaHomeOne />
      <AboutAreaHomeOne />
      <ServiceAreaHomeOne />
      <GuideAreaHomeOne />
      <TestimonialAreaHomeOne />
      <BrandsAreaHomeOne />
      <OurProcessHomeOne />
      <PriceingHomeOne />
      <BlogAreaHomeOne />
      <FooterOne />
    </>
  );
};

export default HomeOne;