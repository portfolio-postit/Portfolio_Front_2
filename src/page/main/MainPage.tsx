import HeaderContainer from "../../components/header/HeaderContainer";
import React from "react";
import * as S from "./styles";
const date = new Date();
const MainPage = () => {
  return (
    <S.Body>
      <S.Today>
        {date.getMonth()}월 {date.getDate()}일
      </S.Today>
      <HeaderContainer />
      <S.Article>
        <S.MainPostIt to="/about">
          <S.Text>HI My'name ddddddddd</S.Text>
        </S.MainPostIt>
      </S.Article>
      <S.Nav>
        <S.MainPostIt to="/about">
          <S.Text>ssssssssssssssssssssssssssssssssssssssssssssssssssss</S.Text>
        </S.MainPostIt>
      </S.Nav>
      <S.Ads>
        <S.MainPostIt to="/about">
          <S.Text>ssssssssssssssssssssssssssssssssssssssssssssssssssss</S.Text>
        </S.MainPostIt>
      </S.Ads>
      <S.Footer></S.Footer>
    </S.Body>
  );
};

export default MainPage;
