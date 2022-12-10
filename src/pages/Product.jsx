import styled from "styled-components";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import NavBar from "../components/NavBar";
import ImgSlider from "../components/ProductPage/ImgSlider";
import { useEffect, useState } from "react";
import { publicRequest, userRequest } from "../requestMethod";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../utils/Loader";
import Modal from "../utils/Modal";
import SignInModal from "../utils/SignInModal";
// import BackDrop from "../utils/BackDrop";

const Container = styled.div`
  padding: 13px;
`;
const TopTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
`;
const ProductName = styled.h1`
  font-weight: 600;
  font-size: 19.5px;
`;
const ProductPrice = styled.h1`
  font-weight: 800;
  font-size: 19.5px;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  row-gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const ActionButton = styled.div`
  display: flex;
  flex: 1;
  min-width: 155px;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  border: 3px solid #2196d9;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.bgColor};
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s;
`;

const BackDrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const DescriptionBox = styled.div``;

const DescriptionText = styled.div`
  font-weight: 500;
  font-size: 15px;
`;

const ProductPage = () => {
  const params = useParams();
  const userId = useSelector(
    (state) => state.user.currentUser?.data?.user?._id
  );
  const [product, setProduct] = useState(null);
  const [showContact, setShowContact] = useState(false);
  const [productSaved, setProductSaved] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [buttonColor, setbuttonColor] = useState({
    text: "#fff",
    bg: "#2196D9",
  });
  const [saveButtonColor, setSavebuttonColor] = useState({
    text: "#2196D9",
    bg: "#fff",
  });

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest(`/products/${params.productId}`);
        setProduct(res.data.data.product);
      } catch (err) {
        console.log(err);
      }
      setIsFetching(false);
    };

    getProduct();
  }, []);

  const handleSaveProduct = async () => {
    if (userId) {
      try {
        await userRequest.post(
          `/save/user/${userId}/product/${params.productId}`
        );
      } catch (err) {
        console.log(err);
      }
      setProductSaved(true);
      setSavebuttonColor({ text: "#fff", bg: "#2196D9" });
    } else {
      setShowModal(true);
    }
  };

  const handleShowContact = () => {
    if (userId) {
      setShowContact(true);
      setbuttonColor({ bg: "#fff", text: "#2196D9" });
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <NavBar />
      {showModal && <BackDrop onClick={() => setShowModal(false)} />}
      {showModal && <SignInModal />}
      <ImgSlider imageUrls={product?.images} />
      <Container>
        {product && (
          <TopTextContainer>
            <ProductName>{product.title}</ProductName>
            <ProductPrice>₦{product.price}</ProductPrice>
          </TopTextContainer>
        )}

        {product && (
          <ActionContainer>
            <ActionButton
              onClick={handleShowContact}
              textColor={buttonColor.text}
              bgColor={buttonColor.bg}
            >
              <WhatsAppIcon
                style={{
                  color: buttonColor.text,
                  fontSize: 25,
                  marginRight: 10,
                }}
              />
              <p>{showContact ? product.seller?.number : "Show Contact"}</p>
            </ActionButton>
            <ActionButton
              onClick={handleSaveProduct}
              textColor={saveButtonColor.text}
              bgColor={saveButtonColor.bg}
            >
              <FavoriteBorderRoundedIcon
                style={{
                  color: saveButtonColor.text,
                  fontSize: 25,
                  marginRight: 10,
                }}
              />
              <p>{productSaved ? "Saved" : "Save Product"}</p>
            </ActionButton>
          </ActionContainer>
        )}
        {product && (
          <DescriptionBox>
            <DescriptionText>
              {product?.description
                ? product.description
                : "proThe best product you get on the market with retals and supping things every where..."}
            </DescriptionText>
          </DescriptionBox>
        )}
        {isFetching && <Loader spaceHeight="20vh" />}
      </Container>
    </>
  );
};

export default ProductPage;
