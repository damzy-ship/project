import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #dfdcdc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 75%;
  padding: 20px;
  background-color: #fff;
  position: relative;
`;
const Title = styled.div`
  font-weight: 300;
  font-size: 20px;
  margin-bottom: 22px;
  text-transform: uppercase;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  /* padding: 15px 20px; */
  flex: 1;
  border: 1px solid #939393;
  transition: all 0.2s;
  padding: 10px;
  font-size: 15px;
  font-weight: 300;
  &:focus {
    border: solid 1px #2196d9;
    outline: none;
  }
  margin-bottom: 22px;
  &:last-of-type {
    margin-bottom: 46px;
  }
`;

const Button = styled.button`
    font-weight: 700;
    font-size: 15px;
    background-color: #2196D9;
    border: none;
    text-transform: uppercase;
    color: #fff;
    padding: 7.5px 18px;
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="user name" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="password confirm" />
            <Button>Continue</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
