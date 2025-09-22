import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import ContactusArea from "./ContactusArea";
import FooterOne from "@/layouts/footers/FooterOne";

 

const Contactus = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Contact Us" subtitle="Contact Us" />
      <ContactusArea /> 
      <FooterOne />
    </>
  );
};

export default Contactus;