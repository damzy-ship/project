import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 27vw;
  min-width: calc(100% / 4.8);
  & a {
    text-decoration: none;
    color: #000;
  }
`;

const InnerContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgContainer = styled.div`
  height: 80%;
  width: 100%;
  background-color: #FFE9C7;
  border-radius: 18%;
  overflow: hidden;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: ${(props)=> props.imgWidth? props.imgWidth : "80%" };
  /* height: 70%; */
`

const ItemName = styled.p`
  font-weight: 500;
  font-size: 15px;
  /* text-transform: uppercase; */
`;



const CategoryItem = (props) => {
  return (
    <Container>
      <Link to={`/category/${props.categoryName.toLowerCase()}`}>
        <InnerContainer>
          <ImgContainer>
          <Image imgWidth={props.imgWidth} src={`./img/${props.categoryName}.png`} alt="img nots"  />
          </ImgContainer>
          <ItemName>{props.categoryName.trim()[0].toUpperCase()+props.categoryName.trim().slice(1)}</ItemName>
        </InnerContainer>
      </Link>
    </Container>
  );
};

export default CategoryItem;
