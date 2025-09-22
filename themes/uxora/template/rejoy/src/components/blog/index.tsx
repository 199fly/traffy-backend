
import BlogArea from './BlogArea';
import Breadcrumb from '@/common/Breadcrumb';
import HeaderOne from '@/layouts/headers/HeaderOne'; 
import FooterOne from '@/layouts/footers/FooterOne';

const Blog = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Blog" subtitle="Blog" />
      <BlogArea />
      <FooterOne />
    </>
  );
};

export default Blog;