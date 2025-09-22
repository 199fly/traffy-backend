
import HeaderOne from '@/layouts/headers/HeaderOne'; 
import ContactusArea from './ContactusArea';
import FaqAreaHomeOne from '../home/FaqAreaHomeOne';
import CtaAreaHomeOne from '../home/CtaAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const Contactus = () => {
  return (
    <>
      <HeaderOne />
      <ContactusArea />
      <FaqAreaHomeOne />
      <CtaAreaHomeOne />
      <FooterOne />
    </>
  );
};

export default Contactus;