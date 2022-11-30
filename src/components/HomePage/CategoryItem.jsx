import styled from "styled-components";

const Container = styled.div`
  height: 35vw;
  min-width: calc(100% / 3.5);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgContainer = styled.div`
  height: 80%;
  width: 100%;
  background-color: #d9d9d9;
  border-radius: 18%;
  overflow: hidden;
  margin-bottom: 10px;
`;

const ItemName = styled.p`
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;

`;

const CategoryItem = (props) => {
  return (
    <Container>
      <ImgContainer></ImgContainer>
      <ItemName>{props.categoryName}</ItemName>
    </Container>
  );
};

export default CategoryItem;
