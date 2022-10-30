import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom'
import "./Login.css";
import { LoginAuthAction } from "../redux/actions/AuthAction";

const  Login = (props)=> {

  const { login } = props;
  const [loginState, setLoginState] = useState({});
  console.log(loginState)

  const navigate = useNavigate();

  return (
    <section className="sectionContainer">
      <form onSubmit={(event) => {
                event.preventDefault();
                login(loginState,navigate);
              }}>
      <MainContainer>
      <WelcomeText>MileStone</WelcomeText>
      
      <InputContainer>
            <input
                type="text"
                className="form-control form-control-sm"
                onChange={(event) => {
                  const username = event.target.value;
                  setLoginState({ ...loginState, ...{ username  } });
                }}
              />
            <input
                type="password"
                className="form-control form-control-sm"
                onChange={(event) => {
                  const password = event.target.value;
                  setLoginState({ ...loginState, ...{ password } });
                }}
            />
      </InputContainer>
      
      <ButtonContainer>
          <Button  content="LogIn"/>
      </ButtonContainer>
      <HorizontalRule />
    </MainContainer>
    </form>
    </section>
    
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
  input{
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 2rem;
    width: 80%;
    height: 3rem;
    padding: 1rem;
    border: none;
    outline: none;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    margin-top:1rem;
    &:focus {
      display: inline-block;
      box-shadow: 0 0 0 0.2rem #ffc107;
      backdrop-filter: blur(12rem);
      border-radius: 2rem;
    }
    &::placeholder {
      color: #ffc107;
      font-weight: 100;
      font-size: 1rem;
    }
  }
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;


const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (loginState,navigate) => {
      dispatch(LoginAuthAction(loginState,navigate));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
