import styled from "styled-components";
import { Link } from "react-router-dom";
import { CATEGORY_DATA, ACCOUNT_DATA } from "../data";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Container = styled.nav`
  background-color: #fff;
  max-width: 300px;
  min-width: 270px;
  width: 70vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${(props) => (props.active ? "0" : "-100%")};
  transition: ${(props) => (props.active ? "350ms" : "850ms")};
  z-index: 2;
`;

const ToggleContainer = styled.div`
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToggleButtonBox = styled.div`
  /* background-color: red; */
  padding: 20px;
  position: absolute;
  top: 15%;
  left: 10%;
`;

const ToggleButton = styled.div`
  border: 2px solid #181818;
  position: absolute;
  top: 45%;
  left: 10%;
  transform: ${(props) =>
    props.positive ? "rotate(50deg)" : "rotate(-50deg)"};
  width: 26px;
  border-radius: 2px;
  background-color: #181818;
`;

const Line = styled.hr`
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};
`;

const NavTitle = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
`;

const NavItems = styled.ul`
  padding-inline-start: 0px;
  & a {
    text-decoration: none;
    color: #000;
  }
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 17px;
  padding: 9px 30px;
  transition: all 0.2s;
  &:hover {
    color: red;
  }
`;

const NavText = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
`;

const NavHeader = styled.h2`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #2196d9;
  text-transform: uppercase;
  margin-left: 15px;
  margin-bottom: ${(props)=>props.mb};
`;

const SideBar = ({ sidebar, showSidebar }) => {
  return (
    <Container active={sidebar && "active"}>
      <ToggleContainer>
        <ToggleButtonBox onClick={showSidebar}>
          <ToggleButton positive={true} />
          <ToggleButton positive={false} />
        </ToggleButtonBox>
        <NavTitle>BHU STORE</NavTitle>
      </ToggleContainer>
      <Line mb="9px" />
      <NavItems>
        {ACCOUNT_DATA.map((data) => (
          <Link key={data.id} to={data.location}>
            <NavItem>
              {data.icon}
              <NavText>{data.title}</NavText>
            </NavItem>
          </Link>
        ))}
      </NavItems>
      <Line mt="12px" mb="12px" />
      <NavHeader mb="7px">Categories</NavHeader>
      <NavItems>
        {CATEGORY_DATA.map((data) => (
          <Link key={data.id} to={data.location}>
            <NavItem>
              {data.icon}
              <NavText>{data.title}</NavText>
            </NavItem>
          </Link>
        ))}
      </NavItems>
      <Line mt="12px" mb="12px" />
      <NavHeader mb="15px">Contact Us</NavHeader>
      <NavItems>
        <Link to="/">
          <NavItem>
            <WhatsAppIcon style={{ fontSize: 24, width: 28 }}/>
            <NavText>09060859789</NavText>
          </NavItem>
        </Link>
      </NavItems>
    </Container>
  );
};

export default SideBar;
