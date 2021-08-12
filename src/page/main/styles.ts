import styled, { keyframes } from "styled-components";
import { ShakePostIt } from "./animation";
import { Route, Link } from "react-router-dom";

export const Body = styled.div`
  display: grid;
  grid-template-areas:
    ". . today"
    "header header header"
    "nav article ads"
    "footer footer footer";
  grid-template-rows: 25px 60px auto 60px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  min-height: 100vh;
  /* max-width: 96%; */
  header,
  footer,
  article,
  nav {
    background: gold;
  }
  @media only screen and (max-width: 1650px) {
    grid-template-columns: 1fr 1.5fr 1fr;
  }
  @media only screen and (max-width: 1250px) {
    grid-template-columns: 1fr 1.5fr 1fr;
  }
  @media only screen and (max-width: 992px) {
    grid-template-areas:
      "today today"
      "header header"
      "article article"
      "nav ads "
      "footer footer";
    grid-template-rows: 25px 60px auto auto 60px;
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 768px) {
    grid-template-areas:
      "today"
      "header"
      "article"
      "nav"
      "ads"
      "footer";
    grid-template-rows: 25px 60px auto auto auto 60px;
    grid-template-columns: 1fr;
  }
`;

export const Footer = styled.footer`
  grid-area: footer;
`;

export const Ads = styled.div`
  grid-area: ads;
`;

export const Nav = styled.nav`
  grid-area: nav;
`;

export const Article = styled.article`
  grid-area: article;
  display: grid;
  grid-template: "." "mainPostIt";
  grid-template-rows: 30px auto 30px;
`;

export const MainPostIt = styled(Link)`
  //기본적인 button 설정
  grid-area: mainPostIt;
  width: 90%;
  min-height: 10px;
  height: 500px;
  box-sizing: content-box;
  position: relative;
  background: pink;
  border-bottom-right-radius: 20%;
  //font
  font-size: 40px;
  letter-spacing: 0.2em;
  text-align: center;
  text-decoration: none;

  //display 설정
  display: flex;
  align-items: center;
  :hover {
    animation: ${ShakePostIt} 2s cubic-bezier(0.42, 0, 1, 1) both;
  }
  ::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 10%;
    height: 100%;
    background: gold;
    border-bottom-right-radius: 50%;
  }
`;

export const Text = styled.a`
  color: white;
  border: none;
  outline: none;
  padding-bottom: 5%;
  margin-left: 15%;
  margin-right: 5%;
  display: block;
  height: auto;
  width: 80%;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
`;

export const Today = styled.a`
  grid-area: today;
  text-align: right;
`;
