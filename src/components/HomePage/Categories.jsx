import Slider from "../../utils/Slider";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
      <Slider>
        <CategoryItem categoryName="Shirts"/>
        <CategoryItem categoryName="Bags"/>
        <CategoryItem categoryName="Shoes"/>
        <CategoryItem categoryName="Food"/>
        <CategoryItem categoryName="Gadgets"/>
      </Slider>
  );
};

export default Categories;
