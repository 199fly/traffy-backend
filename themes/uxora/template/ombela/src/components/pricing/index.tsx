 
import HeaderOne from '@/layouts/headers/HeaderOne'; 
import FooterOne from '@/layouts/footers/FooterOne';
import PricingAreaHomeOne from '../home/PricingAreaHomeOne';
import TestimonialAreaHomeOne from '../home/TestimonialAreaHomeOne';
import CtaAreaHomeOne from '../home/CtaAreaHomeOne';


const Pricing = () => {
  return (
    <>
      <HeaderOne /> 
      <PricingAreaHomeOne style_2={true} />
      <TestimonialAreaHomeOne />
      <CtaAreaHomeOne />
      <FooterOne />
    </>
  );
};

export default Pricing;