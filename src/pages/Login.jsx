import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import history from "../history";
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
  flex-direction: column;

  & a {
    margin: 20px 0 0 0;
    font-size: 14px;
    width: 100%;
    /* text-decoration: none; */
  }
`;

const Input = styled.input`
  /* padding: 15px 20px; */

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
    margin-bottom: 32px;
  }
`;

const Error = styled.p`
  color: red;
  margin-bottom: 10px;
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
  align-self: flex-start;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error, currentUser, lastVisitedUrl } = useSelector((state) => state.user);
  const location = useLocation();

  window.onload = () => dispatch(refreshData());

  useEffect(() => {
    if (currentUser) {
      history.push(lastVisitedUrl);
      window.location.reload();
      console.log(currentUser);
    } 
  }, [currentUser, lastVisitedUrl]);

  useEffect(() => {
    dispatch(refreshData())
  }, [location,dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };
  return (
    <Container>
      {isFetching && <BackDrop />}
      {isFetching && <Loader abs={true} />}
      <Wrapper>
        <Title>Login to account</Title>
        <Form onSubmit={(e)=>handleSubmit(e)}>
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" disabled={isFetching}>
            Login
          </Button>
          {error.valid && <Error>Wrong credentials try again...</Error>}
          <Link to="/register">
            Don't have an account? register...
          </Link>
          {/* <Link>DON'T REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link> */}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
