
import HeaderOne from '@/layouts/headers/HeaderOne';
import FeaturesHeroArea from './FeaturesHeroArea';
import FeaturesAreaHomeOne from '../home/FeaturesAreaHomeOne';
import FeaturesArea from './FeaturesArea';
import IntegrationsArea from './IntegrationsArea';
import CtaAreaHomeOne from '../home/CtaAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const Features = () => {
  return (
    <>
      <HeaderOne />
      <FeaturesHeroArea />
      <FeaturesAreaHomeOne />
      <FeaturesArea />
      <IntegrationsArea />
      <CtaAreaHomeOne />
      <FooterOne />

    </>
  );
};

export default Features;