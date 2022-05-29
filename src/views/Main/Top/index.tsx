import React from "react";
import Header from "layout/AppLayout/Header";
import CusBtn from "component/CustomBtn";
import {
  Top,
  HomeTop,
  HomeTopLeft,
  LeftTitle,
  HomeTopRightImg,
  CircleImg,
} from "./income.style";
const HomePage = () => {
  return (
    <Top>
      <Header />
      <HomeTop>
        <CircleImg src="img/topmain.png" alt="" draggable={false} />
        <HomeTopRightImg src="img/topImg.png" alt="" draggable={false} />
        <HomeTopLeft>
          <LeftTitle>Build your deck and fight fearsome enemies</LeftTitle>
          <CusBtn text="Read More" />
        </HomeTopLeft>
      </HomeTop>
    </Top>
  );
};
export default HomePage;
