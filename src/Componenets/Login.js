import styled from "styled-components";

import React from "react";

import { auth, provider } from "../Firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";
import { useEffect } from "react";

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const image =
    "http://tbcollc.com/wp-content/uploads/2014/12/RYO-and-Pipe-Tobacco-750x425.jpg";
  const imageStyling = {
    backgroundImage: `url(${image})`,

    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((res) => {
          setUser(res.user);
        })
        .catch((err) => {
          alert(err.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  return (
    <Container style={imageStyling}>
      <CTA>
        <CTALogoOne src="/gif/spin-logo.gif"></CTALogoOne>
        <Form>
          <Google onClick={handleAuth}>
            <img src="./images/google.svg" alt="" />
            Logga in med Google
          </Google>
        </Form>
      </CTA>
      <BgImage />
    </Container>
  );
};

const Container = styled.a`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  width: 100%;
`;

const BgImage = styled.img`
  background-image: url("./Assets/bg2.jpg");

  height: 100;
  width: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;

  @media (max-width: 768px) {
  }
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  margin-right: auto;
  text-align: center;
  margin-left: auto;

  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 28px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`;

const Google = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 70%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  background-color: #fff;

  &:hover {
    background-color: rgba(207, 207, 207, 025);
    color: rgba(0, 0, 0, 0.75);
    cursor: pointer;
  }
  img {
    background-color: #fff;
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
export default Login;
