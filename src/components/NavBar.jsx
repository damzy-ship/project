import React, { useState } from "react";
// import SideBarData from "./SideBarData";
import styled from "styled-components";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SideBar from "./SideBar";

const Container = styled.div`
  height: 60px;
  width: 100vw;
  overflow: hidden;
  background-color: #fff;
  position: ${(props) => props.fixed && "fixed"};
  top: 0;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  /* background-color: red; */
  display: flex;
  align-items: center;
`;

const NavTitleContainer = styled.div`
  flex: 1;
`;

const NavTitle = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
`;

const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;


const Navbar = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Container fixed={props.fixed}>
        {sidebar && <Modal onClick={showSidebar} />}
        <Wrapper>
          <MenuRoundedIcon
            onClick={showSidebar}
            style={{ color: "#181818", fontSize: 35, marginRight: 20 }}
          />
          <NavTitleContainer>
            <NavTitle>BHU STORE</NavTitle>
          </NavTitleContainer>
          <FavoriteBorderRoundedIcon style={{ fontSize: 28 }} />
          <PersonOutlineOutlinedIcon style={{ fontSize: 32, marginLeft: 15 }} />
        </Wrapper>
        <SideBar sidebar={sidebar} showSidebar={showSidebar} />
      </Container>
    </>
  );
};

export default Navbar;
