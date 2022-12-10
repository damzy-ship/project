import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Modal";

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ModalText = styled.p`
  margin-bottom: ${(props) => props.mb};
  font-weight: 700;
  font-size: 16px;
  & a {
    cursor: pointer;
    text-decoration: none;
    color: #2196d9;
    font-size: ${(props) => props.fs};
  }
`;

const SignInModal = () => {
  return (
    <Modal>
      <Container>
        <ModalText mb="20px">Don't have an account?</ModalText>
        <ModalText mb="40px" fs="37px">
          <Link to="/register">Sign Up</Link>
        </ModalText>

        <ModalText mb="15px">Already got an an account?</ModalText>
        <ModalText fs="20px">
          <Link to="/login">Login</Link> to continue...
        </ModalText>
      </Container>
    </Modal>
  );
};

export default SignInModal;
