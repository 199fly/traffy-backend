 
import Aboutus from '@/components/about-us'; 
import Wrapper from '@/layouts/Wrapper'; 

export const metadata  = {
  title: "Uxora Aboutus - IT Solution & Technology Next JS Temaptle",
  description: "Uxora - IT Solution & Technology Next JS Temaptle",
}
 

const index = () => {
  return (
    <Wrapper>
      <Aboutus />
    </Wrapper>
  );
};

export default index;