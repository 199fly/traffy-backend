
import Breadcrumb from '@/common/Breadcrumb';
import HeaderOne from '@/layouts/headers/HeaderOne'; 
import SingleServiceArea from './SingleServiceArea';
import FooterOne from '@/layouts/footers/FooterOne';

const SingleService = () => {
  return (
    <>
    <HeaderOne />
    <Breadcrumb title="Service Details" subtitle="Service Details" />
    <SingleServiceArea />
    <FooterOne />
      
    </>
  );
};

export default SingleService;