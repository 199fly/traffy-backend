  
import SingleService from '@/components/single-service';
import Wrapper from '@/layouts/Wrapper'; 

export const metadata  = {
  title: "Uxora Service Details - IT Solution & Technology Next JS Temaptle",
  description: "Uxora - IT Solution & Technology Next JS Temaptle",
}
 
const index = () => {
  return (
    <Wrapper>
      <SingleService />
    </Wrapper>
  );
};

export default index;