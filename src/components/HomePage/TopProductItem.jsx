import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-width: calc(100% / 2.5);
  max-width: calc(100% / 2.5);
  position: relative;
  display: flex;
  flex-direction: column;
  & a {
    text-decoration: none;
    color: #000;
  }
`;

const ImgContainer = styled.div`
  height: 35vw;
  width: 100%;
  background-color: #d9d9d9;
  overflow: hidden;
  margin-bottom: 9px;
   border: solid #0000001c 1px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ItemName = styled.p`
  font-weight: 500;
  font-size: 13px;
  /* text-transform: uppercase; */
  margin-bottom: 6px;
`;

const ItemPrice = styled.p`
  font-weight: 700;
  font-size: 16px;
`;

const TopProductItem = (props) => {
  return (
    <Container>
      <Link to={`/product/${props.id}`}>
        <ImgContainer>
          {props.imageUrl && <Image src={`/img/products/${props.imageUrl}`} />}
        </ImgContainer>
        <ItemName>{props.itemName}</ItemName>
        <ItemPrice>₦{props.itemPrice}</ItemPrice>
      </Link>
    </Container>
  );
};

export default TopProductItem;
