import styled from "styled-components";

import React from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import db from "../Firebase";
import { useEffect } from "react";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AddToHomeScreenIcon from "@material-ui/icons/AddToHomeScreen";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const myLink = detailData.demoLink;
  const card = JSON.stringify(detailData.cardImg);

  const imageStyling = {
    backgroundImage: `url(${card})`,

    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  useEffect(() => {
    db.collection("vapes")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
          window.scrollTo(0, 0);
        } else {
          console.log("no such doc in firebase 🔥");
        }
      })
      .catch((err) => {
        console.log("err: ", err.message);
      });
  }, [id]);

  return (
    <Container style={imageStyling}>
      <Box>
        {!detailData.beställningvara ? (
          <>
            <ProductBox> {detailData.title} </ProductBox>
            <ProductBox>{detailData.pris1}</ProductBox>
            <ProductBox>{detailData.pris3}</ProductBox>
            <ProductBox>frakt</ProductBox>
            <ShipBox>
              brevlåda: {detailData.brevlåda} butik: {detailData.butik}
            </ShipBox>
          </>
        ) : (
          <>
            <ProductBox> {detailData.title} </ProductBox>
            <ProductBox>{detailData.pris1}</ProductBox>
            <ProductBox>frakt</ProductBox>
            <ShipBox> {detailData.fraktInfo}</ShipBox>
          </>
        )}

        {!detailData.tillbehör && !detailData.beställningvara ? (
          <>
            <SubTitle>
              Ingår alltiid 10ml valfri smak till din {detailData.title}
            </SubTitle>
            <SubTitle>Klicka Youtube för att enkelt komma igång</SubTitle>
          </>
        ) : (
          <SubTitle>{detailData.smaker}</SubTitle>
        )}

        <Controls>
          <AddList>
            <Link to="/home">
              <ArrowBackOutlinedIcon />
            </Link>
          </AddList>
          {!detailData.tillbehör && !detailData.beställningvara ? (
            <Player onClick={() => window.open(myLink, "_blank")}>
              <YouTubeIcon />
              <span>Youtube</span>
            </Player>
          ) : (
            <h2></h2>
          )}
        </Controls>

        {!detailData.beställningvara ? (
          <>
            <a
              onClick={() =>
                window.open("https://www.snapchat.com/add/Vapeaims", "_blank")
              }
            >
              <AddToHomeScreenIcon
                style={{ marginLeft: "35%", fontSize: "25", cursor: "pointer" }}
              />
            </a>
            <a
              onClick={() =>
                window.open(
                  `https://wa.me/+46700237630?text=tja%20jag%20vill%20beställa%20en%20${detailData.title.toLowerCase()}%20`,
                  "_blank"
                )
              }
            >
              <AddCircleIcon
                style={{
                  marginLeft: "40px",
                  fontSize: "25",
                  cursor: "pointer",
                }}
              />
            </a>
          </>
        ) : (
          <>
            <a
              onClick={() =>
                window.open(
                  `https://docs.google.com/forms/d/e/1FAIpQLSflgCfoHM9f71TP40IAGDR6t201IKtnpX_w6og0Zw7oQkPmVA/viewform?vc=0&c=0&w=1&flr=0`,
                  "_blank"
                )
              }
            >
              <AddCircleIcon
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  fontSize: "25",
                  cursor: "pointer",
                }}
              />
            </a>
          </>
        )}
      </Box>
    </Container>
  );
};
const Container = styled.a`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: calc(100vh- 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Controls = styled.div`
  align-items: center;
  position: relative;

  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  position: relative;

  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: #fff;
  border: none;
  background-color: #fff;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  position: relative;
  display: block;
  margin-right: auto;
  margin-left: auto;

  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    color: #fff;
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  position: relative;

  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  display: flex;
  color: rgb(249, 249, 249);
  font-size: 13px;
  padding: 15px;
  justify-content: center;

  min-height: 20px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Box = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  width: 40%;
  padding: 7px;
  margin-top: 300px;
  background-color: rgba(51, 0, 102, 0.7);

  justify-content: center;
  align-items: center;
  z-index: 1;

  @media (max-width: 768px) {
    width: 300px;
  }
`;
const ProductBox = styled.div`
  font-size: 24px;
  position: relative;

  margin-bottom: 15px;
  text-align: center;
`;
const PriceBox = styled.div``;
const ShipBox = styled.div`
  padding: 12px;
  position: relative;

  font-size: 18px;
  text-align: center;
`;
export default Detail;
