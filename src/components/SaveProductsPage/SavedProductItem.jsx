import styled from "styled-components";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Container = styled.div`
  padding: 10px;
  background-color: #fff;
`;

const TopContentBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 11px;
`;

const ImgContainer = styled.div`
  min-width: 24vw;
  height: 24vw;
  background-color: #d9d9d9;
  margin-right: 10px;
`;

const TextContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ProductName = styled.p`
  font-weight: 600;
  font-size: 15px;
`;

const ProductDescription = styled.p`
  font-weight: 400;
  font-size: 15px;
`;

const ProductPrice = styled.p`
  font-weight: 700;
  font-size: 16px;
`;

const Divisor = styled.hr`
  background-color: #d9d9d9;
  margin-bottom: 5px;
`;
const ActionBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const RemoveBox = styled.div`
  font-weight: 700;
  font-size: 13.7px;
  text-transform: uppercase;
  color: #D95353;
  display: flex;
  align-items: center;
`;

const ViewProduct = styled.button`
  background-color: #d9d9d9;
  font-weight: 500;
  font-size: 13.7px;
  border: none;
  text-transform: uppercase;
  padding: 3px 10px;
`;

const SavedProductItem = (props) => {
  return (
    <Container>
      <TopContentBox>
        <ImgContainer />
        <TextContainer>
          <ProductName>{props.name}</ProductName>
          <ProductDescription>
            {props.description.slice(0, 1).toUpperCase() +
              props.description.slice(1, 25).toLowerCase() +
              "..."}
          </ProductDescription>
          <ProductPrice>₦{props.price}</ProductPrice>
        </TextContainer>
      </TopContentBox>
      <Divisor />
      <ActionBox>
        <RemoveBox>
          <DeleteOutlineIcon style={{ color: "#D95353", fontSize: 24}} />
          <p>Remove</p>
        </RemoveBox>
        <ViewProduct>View Product</ViewProduct>
      </ActionBox>
    </Container>
  );
};

export default SavedProductItem;
