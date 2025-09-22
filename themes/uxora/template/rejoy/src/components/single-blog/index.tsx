
import Breadcrumb from '@/common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne'; 
import SingleBlogArea from './SingleBlogArea';

const SingleBlog = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Blog Details" subtitle="Blog Details" />
      <SingleBlogArea />
      <FooterOne />
    </>
  );
};

export default SingleBlog;