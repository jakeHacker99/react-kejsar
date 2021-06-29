import styled from "styled-components";

import BookIcon from "@material-ui/icons/Book";
import InstagramIcon from "@material-ui/icons/Instagram";
import React from "react";

const Viewers = (props) => {
  return (
    <Container>
      <Wrap>
        <>
          <a
            href="/"
            onClick={() =>
              window.open("https://vapeaims.blogspot.com/", "_blank")
            }
          >
            <BookIcon className="icon" />
            <video autoPlay="autoplay" muted loop></video>
          </a>
        </>
      </Wrap>

      <Wrap>
        <a
          href="/"
          onClick={() =>
            window.open("https://www.instagram.com/kejsarprinsen/", "_blank")
          }
        >
          <InstagramIcon className="icon" />
          <video autoPlay="autoplay" muted loop></video>
        </a>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  padding: 30px 0px 26px;
  display: grid;

  grid-gap: 25px;

  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (min-width: 768px) {
    width: 300px;
    grid-gap: 30%;
  }

  @media (max-width: 768px) {
    height: 200px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    border: 3px solid #fff;
  }
  .icon {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    z-index: 1;
    top: 0;

    @media (max-width: 768px) {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
    }
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: #fff;
    video {
      opacity: 1;
    }
  }
`;

export default Viewers;
