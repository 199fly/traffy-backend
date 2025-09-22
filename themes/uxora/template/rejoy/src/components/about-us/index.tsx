
import TeamArea from './TeamArea';
import VideoArea from './VideoArea';
import AboutInfo from './AboutInfo';
import AboutService from './AboutService';
import Breadcrumb from '@/common/Breadcrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import BlogAreaHomeOne from '../Home/BlogAreaHomeOne';
import CounterAreaHomeOne from '../Home/CounterAreaHomeOne';

const Aboutus = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="About Us" subtitle="About Us" />
      <VideoArea />
      <AboutInfo />
      <AboutService />
      <CounterAreaHomeOne />
      <TeamArea />
      <BlogAreaHomeOne />
      <FooterOne />
    </>
  );
};

export default Aboutus;