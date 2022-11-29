import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
  padding: ${(props)=> props.padding || "0 15px"} ;
  column-gap: 12px;
  background-color: ${(props)=>props.bgColor};
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const Slider = (props) => {
  return (
    <Wrapper bgColor={props.bgColor} padding={props.pd}>
        {props.children}
    </Wrapper>
  )
}

export default Slider