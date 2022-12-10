import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import SavedProductItem from "../components/SaveProductsPage/SavedProductItem";
import TopBanner from "../components/TopBanner";
import { userRequest } from "../requestMethod";
import Loader from "../utils/Loader";

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
  const params = useParams();
  const userId = params.userId;
  const [reload, setReload] = useState(false);
  const [savedProducts, setSavedProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const triggerReload = () => {
    setReload(!reload);
  };

  useEffect(() => {
    const getSavedProducts = async () => {
      try {
        const res = await userRequest.get(`/save/user/${userId}`);
        setSavedProducts(res?.data?.data?.savedProducts);
      } catch (err) {
        console.log(err);
      }
      setIsFetching(false);
    };

    getSavedProducts();
  }, [userId, reload]);

  return (
    <Container>
      <NavBar fixed={true} />
      <TopBanner bgColor="#F5F5F5">Saved Products</TopBanner>
      <ContentContainer>
        {savedProducts.map((product) => (
          <SavedProductItem
            key={product._id}
            id={product._id}
            userId={userId}
            name={product.title}
            price={product.price}
            description={product.description}
            imageUrl={product.images[0]}
            triggerReload={triggerReload}
          />
        ))}
        {isFetching && <Loader spaceHeight="20vh"/>}
      </ContentContainer>
    </Container>
  );
};

export default SavedProductsPage;
