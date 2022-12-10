import styled from "styled-components";
import { register } from "../redux/apiCalls";
import history from "../history";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { refreshData } from "../redux/userReducer";
import Loader from "../utils/Loader";
import { Link, useLocation } from "react-router-dom";
import BackDrop from "../utils/BackDrop";

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
  & a {
    margin: 20px 0 0 0;
    font-size: 14px;
    width: 100%;
    /* text-decoration: none; */
  }
`;

const Input = styled.input`
  /* padding: 15px 20px; */
  flex: 1;
  border: 1px solid #939393;
  transition: all 0.2s;
  padding: 10px;
  font-size: 15px;
  font-weight: 400;
  &:focus {
    border: solid 1px #2196d9;
    outline: none;
  }
  margin-bottom: 22px;
  &:last-of-type {
    margin-bottom: 46px;
  }
`;

const Error = styled.p`
  color: red;
  margin-bottom: 10px;
  width: 100%;
  margin-top: 10px;
`;

const Button = styled.button`
  font-weight: 700;
  font-size: 15px;
  background-color: #2196d9;
  border: none;
  text-transform: uppercase;
  color: #fff;
  padding: 7.5px 18px;
  margin-bottom: 10px;
`;


const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error, registered, currentUser, lastVisitedUrl } = useSelector(
    (state) => state.user
  );
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();

  window.onload = () => dispatch(refreshData());

  useEffect(() => {
    if (currentUser) {
      history.push(lastVisitedUrl);
      window.location.reload();
    } else if (error.valid) {
      setErrorMessage(error.message.message);
    }
  }, [registered, error]);

  useEffect(() => {
    dispatch(refreshData())
  }, [location]);

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { name: userName, email, password, passwordConfirm });
  };
  return (
    <Container>
      {isFetching && <BackDrop />}
      {isFetching && <Loader abs={true} />}
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input
            placeholder="user name"
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="password confirm"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            Register
          </Button>

          {!isFetching && error.valid && <Error>{errorMessage}</Error>}
          <Link to="/login">Got an account? Login to continue</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
