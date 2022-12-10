import Slider from "../../utils/Slider";
import TopProductItem from "./TopProductItem";
import { publicRequest } from "../../requestMethod";
import { useEffect, useState } from "react";
import Loader from "../../utils/Loader";

const TopProducts = () => {
  const [topProducts, setTopProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("/products/top-products");
        setTopProducts(res.data.data.topProducts);
      } catch (err) {
        console.log(err);
      }
      setIsFetching(false);
    };

    getProducts();
  }, []);

  return (
    <Slider>
      {topProducts &&
        topProducts.map((product) => {
          return (
            <TopProductItem
              itemName={product.title}
              itemPrice={product.price}
              id={product._id}
              key={product._id}
              imageUrl={product.images[0]}
            />
          );
        })}
      {isFetching && <Loader spaceHeight="20vh" />}
    </Slider>
  );
};

export default TopProducts;
