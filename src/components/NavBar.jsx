import React, { useEffect, useState } from "react";
// import SideBarData from "./SideBarData";
import styled from "styled-components";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SideBar from "./SideBar";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLastVisited } from "../redux/userReducer";
import BackDrop from "../utils/BackDrop";

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
  & a {
    text-decoration: none;
    color: #000;
  }
`;

const NavTitleLink = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #2196d9;
  text-transform: uppercase;
`;

const NavIconContainer = styled.div`
  & a {
    text-decoration: none;
    color: #000;
  }
`;

const Navbar = (props) => {
  const location = useLocation();
  const user = useSelector((state) => state.user?.currentUser);
  const userId = user?.data?.user._id;
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const dispatch = useDispatch();
  useEffect(() => {
    setSidebar(false);
    dispatch(getLastVisited(location.pathname));
  }, [location, dispatch]);

  return (
    <>
      <Container fixed={props.fixed}>
        {sidebar && <BackDrop onClick={showSidebar} />}
        <Wrapper>
          <MenuRoundedIcon
            onClick={showSidebar}
            style={{ color: "#181818", fontSize: 35, marginRight: 20 }}
          />
          <NavTitleContainer>
            <NavTitle>
              <Link to="/">BHU STORE</Link>
            </NavTitle>
          </NavTitleContainer>
          {user && (
            <NavIconContainer>
              <Link to={`/${userId}/saved`}>
                <FavoriteBorderRoundedIcon style={{ fontSize: 28 }} />
              </Link>
            </NavIconContainer>
          )}
          {user && (
            <NavIconContainer>
              <Link to={`/${userId}/account`}>
                <PersonOutlineOutlinedIcon
                  style={{ fontSize: 32, marginLeft: 15 }}
                />
              </Link>
            </NavIconContainer>
          )}
          {!user && (
            <NavIconContainer>
              <Link to="/login">
                <NavTitleLink>Sign In</NavTitleLink>
              </Link>
            </NavIconContainer>
          )}
        </Wrapper>
        <SideBar sidebar={sidebar} showSidebar={showSidebar} />
      </Container>
    </>
  );
};

export default Navbar;
