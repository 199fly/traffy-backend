 
import Contactus from '@/components/contact-us'; 
import Wrapper from '@/layouts/Wrapper'; 

export const metadata  = {
  title: "Uxora Contact Us - IT Solution & Technology Next JS Temaptle",
  description: "Uxora - IT Solution & Technology Next JS Temaptle",
}
 

const index = () => {
  return (
    <Wrapper>
      <Contactus />
    </Wrapper>
  );
};

export default index;