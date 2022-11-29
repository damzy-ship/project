import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  margin-bottom: 33px;
  
`;

const MessageBox = styled.div`
  height: 70px;
  background-color: #d9d9d9;
  border-radius: 10px;
  padding: 0 22px;
  display: flex;
  align-items: center;
`;

const Message = styled.h3`
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
`

const BigAd = () => {
  return (
    <Container>
      <MessageBox>
        <Message>Welcoming Message...</Message>
      </MessageBox>
    </Container>
  );
};

export default BigAd;
