import styled from "styled-components";
import NavBar from "../components/NavBar";
import SavedProductItem from "../components/SaveProductsPage/SavedProductItem";
import TopBanner from "../components/TopBanner";

const DATA = [
  {
    id: 1,
    img: "https://i.ibb.co/XsdmR2c/1.png",
    title: "SUMMER SALE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    price: "1,250"
  },
  {
    id: 2,
    img: "https://i.ibb.co/DG69bQ4/2.png",
    title: "AUTUMN COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    price: "4,250"
  },
  {
    id: 3,
    img: "https://i.ibb.co/cXFnLLV/3.png",
    title: "LOUNGEWEAR LOVE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    price: "3,000"
  },
  {
    id: 4,
    img: "https://i.ibb.co/XsdmR2c/1.png",
    title: "SUMMER SALE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    price: "1,250"
  },
  {
    id: 5,
    img: "https://i.ibb.co/DG69bQ4/2.png",
    title: "AUTUMN COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    price: "4,250"
  },
  {
    id: 6,
    img: "https://i.ibb.co/cXFnLLV/3.png",
    title: "LOUNGEWEAR LOVE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    price: "3,000"
  },
  {
    id: 7,
    img: "https://i.ibb.co/cXFnLLV/3.png",
    title: "LOUNGEWEAR LOVE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    price: "3,000"
  }
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  background-color: #d9d9d9;
  flex: 1;
  padding: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;




const SavedProductsPage = () => {
  return (
    <Container>
      <NavBar fixed={true} />
      <TopBanner bgColor="#F5F5F5">Saved Products</TopBanner>
      <ContentContainer>
        {DATA.map((product)=> <SavedProductItem key={product.id} name={product.title} price={product.price} description={product.desc}/>)}
      </ContentContainer>
    </Container>
  );
};

export default SavedProductsPage;
