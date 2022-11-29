import Slider from "../../utils/Slider";
import TopProductItem from "./TopProductItem";

const TopProducts = () => {
  return (
    <Slider>
        <TopProductItem itemName="Adidas Men shoe" itemPrice="1,200"/>
        <TopProductItem itemName="Graphite Tops" itemPrice="3,500"/>
        <TopProductItem itemName="Nike Slides" itemPrice="4,200"/>
        <TopProductItem itemName="Adidas Men shoe" itemPrice="1,200"/>
        <TopProductItem itemName="Adidas Men shoe" itemPrice="1,200"/>
        
    </Slider>
  )
}

export default TopProducts