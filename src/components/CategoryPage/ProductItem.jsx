import styled from "styled-components";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { userRequest } from "../../requestMethod";
import { useSelector } from "react-redux";

const Container = styled.div`
  border-radius: 12px;
  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
`;
const ImgContainer = styled.div`
  height: 150px;
  width: 100%;
  background-color: #d9d9d9;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentBox = styled.div`
  padding: 13px 13px 18px 13px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 3px;
  margin-bottom: 20px;
  & a {
    text-decoration: none;
    color: #000;
  }
`;
const TopLeftContentBox = styled.div``;

const Title = styled.p`
  font-weight: 500;
  font-size: 13px;
  margin-bottom: 3px;
`;
const Price = styled.p`
  font-weight: 700;
  font-size: 16px;
`;

const Button = styled.button`
  font-weight: 700;
  font-size: 15px;
  background-color: #2196d9;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  color: #fff;
  padding: 5px 10px;
  width: 100%;
`;

const FavoriteIconBox = styled.div``;

const ProductItem = (props) => {
  const userId = useSelector(
    (state) => state.user.currentUser?.data?.user?._id
  );

  const [itemSaved, setItemSaved] = useState(false);

  const handleSaveItem = async () => {
    setItemSaved(true);
    try {
      await userRequest.post(`/save/user/${userId}/product/${props.id}`);
    } catch (err) {
      console.log(err);
    }
    // setTimeout(() => {
    //   setItemSaved(false)
    // }, 500);
  };

  return (
    <Container>
      <Link to={`/product/${props.id}`}>
        <ImgContainer>
         {props.imageUrl && <Image src={`/img/products/${props.imageUrl}`} /> }
        </ImgContainer>
      </Link>
      <ContentBox>
        <ContentTextBox>
          <TopLeftContentBox>
            <Title>{props.title}</Title>
            <Price>₦{props.price}</Price>
          </TopLeftContentBox>
          <FavoriteIconBox onClick={handleSaveItem}>
            {!itemSaved ? (
              <FavoriteBorderRoundedIcon style={{ fontSize: 25 }} />
            ) : (
              <FavoriteIcon style={{ fontSize: 27, color: "#D95353" }} />
            )}
          </FavoriteIconBox>
        </ContentTextBox>
        <Link to={`/product/${props.id}`}>
          <Button>View Product</Button>
        </Link>
      </ContentBox>
    </Container>
  );
};

export default ProductItem;
