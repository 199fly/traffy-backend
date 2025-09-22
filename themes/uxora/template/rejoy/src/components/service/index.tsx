
import Breadcrumb from '@/common/Breadcrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceArea from './ServiceArea';
import BrandsAreaHomeOne from '../Home/BrandsAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import PriceingHomeOne from '../Home/PriceingHomeOne'; 

const Service = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Our Service" subtitle="Our Service" />
      <ServiceArea />
      <BrandsAreaHomeOne /> 
      <PriceingHomeOne style_2={true} />
      <FooterOne />
    </>
  );
};

export default Service;