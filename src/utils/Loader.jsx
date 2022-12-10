import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingContainer = styled.div`
  width: 100%;
  height: ${(props)=> props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${(props)=> props.isAbsolute && "absolute"};
  top: 50%;
  left: 50%;
  transform: ${(props)=> props.isAbsolute && "translate(-50%, -50%)"}; ;
  z-index: 10;
`;

const Loader = (props) => {
  return (
    <LoadingContainer height={props.spaceHeight} isAbsolute={props.abs}>
      <CircularProgress />
    </LoadingContainer>
  );
};

export default Loader;
