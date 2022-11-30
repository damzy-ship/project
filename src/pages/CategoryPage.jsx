import NavBar from "../components/NavBar";
import styled from "styled-components";
import TopBanner from "../components/TopBanner";
import ProductItem from "../components/CategoryPage/ProductItem";

const Container = styled.div`
  padding: 18px 13px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-column-gap: 13px;
  grid-row-gap: 13px;
`;


const CategoryPage = () => {
  return (
    <>
      <NavBar fixed={true} />
      <TopBanner bgColor="#d9d9d9">shirts</TopBanner>
      <Container>
        <ProductItem title="Womens shirt cotton with graphity design" price="1,200"/>
        <ProductItem title="Sunscreen Hand Sleeve Outdoor " price="2,500"/>
        <ProductItem title="Arsenal F.c Away Jersey" price="13,499"/>
        <ProductItem title="Mens Casual Fashion" price="4,699"/>
        <ProductItem title="Mens shirt cotton with graphity design" price="1,200"/>
        <ProductItem title="Mens shirt cotton with graphity design" price="1,200"/>
        <ProductItem title="Mens shirt cotton with graphity design" price="1,200"/>
      </Container>
    </>
  );
};

export default CategoryPage;
