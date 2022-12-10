import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  margin-bottom: 33px;
  
`;

const MessageBox = styled.div`
  height: 70px;
  background-color: #FFE9C7;
  border-radius: 10px;
  padding: 0 22px;
  display: flex;
  align-items: center;
`;

const Message = styled.h3`
    font-size: 16px;
    font-weight: 500;
`

const BigAd = () => {
  const user = useSelector((state)=>state.user.currentUser);
  const name = user?.data?.user?.name?.trim();
  const firstName = name && name[0].toUpperCase() + name.split(' ')[0].slice(1);

  return (
    <Container>
      <MessageBox>
        <Message>Welcome {name ? firstName : "to bhu store..."}</Message>
      </MessageBox>
    </Container>
  );
};

export default BigAd;
