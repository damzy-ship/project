import styled from "styled-components";

const Container = styled.div`
  height: 42px;
  background-color: ${(props)=>props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
margin-top: 60px;
`;

const BannerText = styled.h2`
  font-weight: 500;
  font-size: 15px;
  text-transform: uppercase;
`;

const TopBanner = (props) => {
  return (
    <Container bg={props.bgColor}>
      <BannerText>{props.children}</BannerText>
    </Container>
  );
};

export default TopBanner;
