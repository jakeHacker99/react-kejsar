import React from "react";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = () => {
  let settings = {
    dots: true,
    isFinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a
          onClick={() =>
            window.open(
              ` https://www.youtube.com/watch?v=rVm1CwozfpQ`,
              "_blank"
            )
          }
        >
          <img src="/images/ghost.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a
          onClick={() =>
            window.open(
              `https://wa.me/+46700237630?text=tja%20jag%20vill%20handla`,
              "_blank"
            )
          }
        >
          <img src="/images/hd-logo.png" alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: ease-out 0.2s ease;
    }
    &:hover {
      border: 2px solid #fff;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
      border: 2px solid #fff;
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    &:hover {
      border: 2px solid #fff;
    }

    img {
      height: 300px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 80%;

      @media (max-width: 768px) {
        height: 200px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
      }
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;
