import NavBar from "../components/NavBar";
import styled from "styled-components";
import TopBanner from "../components/TopBanner";
import ProductItem from "../components/CategoryPage/ProductItem";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethod";
import { useParams } from "react-router-dom";
import Loader from "../utils/Loader";

const Container = styled.div`
  padding: 18px 13px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-column-gap: 13px;
  grid-row-gap: 13px;
`;

const CategoryPage = () => {
  const params = useParams();
  const [isFetching, setIsFetching] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          `/products?category=${params.categoryId}`
        );
        setProducts(res.data.data.products);
      } catch (err) {
        console.log(err);
      }
      setIsFetching(false);
    };

    getProducts();
  }, [params]);


  return (
    <>
      <NavBar fixed={true} />

      <TopBanner bgColor="#d9d9d9">{params.categoryId}</TopBanner>
      <Container>
        {products?.map((product) => (
          <ProductItem
            key={product._id}
            id={product._id}
            title={product.title}
            price={product.price}
            imageUrl={product.images[0]}
          />
        ))}
        {isFetching && <Loader spaceHeight="20vh"/>}
      </Container>
    </>
  );
};

export default CategoryPage;
