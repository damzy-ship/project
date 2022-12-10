import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { USER_DATA } from "../data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  padding: 20px 30px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

`;


const ReturnButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 15px;
  column-gap: 5px;
  position: absolute;
  top: 20px;
  left: 8px;
  &:hover {
    color: red;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  margin-top: 15px;
  font-weight: 600;
  font-size: 20px;
`;

const ProfileBox = styled.div`
  height: 60px;
  border-bottom: solid 1px #000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 30px;
  width: 100%;
  min-width: 260px;
  padding: 2px 5px;
`;

const PlaceHolder = styled.p`
  font-weight: 300;
  font-size: 15px;
`;
const ProfileInfo = styled.p`
  font-weight: 500;
  font-size: 19px;
  width: 100%;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const Action = styled.button`
  border: none;
  background-color: transparent;
  font-weight: 700;
  font-size: 16px;
  color: #2196d9;
  margin-top: 24px;
`;

const Account = () => {
  const lastUrl = useSelector((state)=>state.user.lastVisitedUrl);
  return (
    <>
      <Link to={lastUrl}>
        <ReturnButton>
          <ArrowBackOutlinedIcon />
          Back to store
        </ReturnButton>
      </Link>
      <Container>
        <ContentContainer>
          <AccountCircleOutlinedIcon
            style={{ color: "#2196D9", width: "75px", height: "75px" }}
          />
          <Header>My Account</Header>
          {USER_DATA.map((data) => (
            <ProfileBox key={data.id}>
              <PlaceHolder>{data.dataTitle}</PlaceHolder>
              <ProfileInfo>{data.userValue}</ProfileInfo>
            </ProfileBox>
          ))}
          <Action>Edit Profile</Action>
        </ContentContainer>
      </Container>
    </>
  );
};

export default Account;
