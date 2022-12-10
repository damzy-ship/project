import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 317px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: #ffffff;
  opacity: 0.9;
  border-radius: 13px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Modal = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
};

export default Modal;
