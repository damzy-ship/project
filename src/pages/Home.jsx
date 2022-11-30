import BigAd from "../components/HomePage/BigAd";
import NavBar from "../components/NavBar";
import Categories from "../components/HomePage/Categories";
import TopProducts from "../components/HomePage/TopProducts";

import styled from "styled-components";

const SubHeading = styled.h2`
  font-weight: 400;
  font-size: 17px;
  margin-bottom: 20px;
  margin-left: 20px;
  text-transform: uppercase;
`;

const Line = styled.div`
  height: 8px;
  width: 100%;
  background-color: #d9d9d9;
  margin-bottom: 22px;
  margin-top: ${(props) => props.mt};
`;

const Home = () => {
  return (
    <>
      <NavBar />
      <BigAd />
      <SubHeading>Products Category</SubHeading>
      <Categories />
      <Line mt="10px" />
      <SubHeading>Top Products</SubHeading>
      <TopProducts />
      <Line mt="20px" />
    </>
  );
};

export default Home;
