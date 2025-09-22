 
import Blog from '@/components/blog'; 
import Wrapper from '@/layouts/Wrapper'; 

export const metadata  = {
  title: "Uxora Blog - IT Solution & Technology Next JS Temaptle",
  description: "Uxora - IT Solution & Technology Next JS Temaptle",
}
 

const index = () => {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  );
};

export default index;