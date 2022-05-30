import React, { useEffect } from "react";
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
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const zoomImg: any = document.getElementById("zoomImg");
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 0 && scrollTop < window.innerHeight + 100) {
      zoomImg.style.transform = `scale(${1 + (scrollTop / 10000) * 2})`;
    }
  };

  return (
    <Top>
      <Header />
      <HomeTop>
        <CircleImg src="img/topmain.png" alt="" draggable={false} />
        <HomeTopRightImg
          src="img/topImg.png"
          alt=""
          draggable={false}
          id="zoomImg"
        />
        <HomeTopLeft>
          <LeftTitle>Build your deck and fight fearsome enemies</LeftTitle>
          <CusBtn text="Read More" />
        </HomeTopLeft>
      </HomeTop>
    </Top>
  );
};
export default HomePage;
