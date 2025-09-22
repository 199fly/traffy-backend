 
import SingleBlog from '@/components/single-blog';
import Wrapper from '@/layouts/Wrapper'; 

export const metadata  = {
  title: "Uxora Blog Details - IT Solution & Technology Next JS Temaptle",
  description: "Uxora - IT Solution & Technology Next JS Temaptle",
}
 
const index = () => {
  return (
    <Wrapper>
      <SingleBlog />
    </Wrapper>
  );
};

export default index;