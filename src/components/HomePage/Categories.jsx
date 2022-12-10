import Slider from "../../utils/Slider";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
      <Slider>
        <CategoryItem categoryName="shirts" />
        <CategoryItem categoryName="bags" imgWidth="75%"/>
        <CategoryItem categoryName="shoes"/>
        <CategoryItem categoryName="phones" imgWidth="60%"/>
        <CategoryItem categoryName="laptops" imgWidth="100%"/>
      </Slider>
  );
};

export default Categories;
