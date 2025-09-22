
import Breadcrumb from '@/common/Breadcrumb';
import HeaderOne from '@/layouts/headers/HeaderOne'; 
import PricingArea from './PricingArea';
import FooterOne from '@/layouts/footers/FooterOne';

const Pricing = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Pricing" subtitle="Pricing" />
      <PricingArea />
      <FooterOne />
    </>
  );
};

export default Pricing;