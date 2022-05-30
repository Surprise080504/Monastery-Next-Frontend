import React from "react";
import Header from "layout/AppLayout/Header";
import Footer from "layout/AppLayout/Footer/FooterBottom";
import {
  Top,
  HomeTop,
  RedGradient,
  Title,
  SubTitle,
  Galleries,
  GalleryPhotoImg,
} from "./income.style";
const GalleryPage = () => {
  return (
    <Top>
      <RedGradient />
      <Header />
      <HomeTop>
        <Title>Gallery</Title>
        <SubTitle>
          Enter the gates of the Monastery and check out what awaits you!
        </SubTitle>
        <Galleries>
          <GalleryPhotoImg src="img/keyfeature1.png" alt="" draggable={false} />
          <GalleryPhotoImg
            src="img/keyfeature3.png"
            alt=""
            draggable={false}
            // data-aos="fade-up"
            // className="aos-init aos-animate"
          />
          <GalleryPhotoImg
            src="img/keyfeature2.png"
            alt=""
            draggable={false}
            // data-aos="fade-up"
            // className="aos-init aos-animate"
          />
          <GalleryPhotoImg
            src="img/keyfeature2.png"
            alt=""
            draggable={false}
            // data-aos="fade-up"
            // className="aos-init aos-animate"
          />
          <GalleryPhotoImg
            src="img/keyfeature1.png"
            alt=""
            draggable={false}
            // data-aos="fade-up"
            // className="aos-init aos-animate"
          />
          <GalleryPhotoImg
            src="img/keyfeature3.png"
            alt=""
            draggable={false}
            // data-aos="fade-up"
            // className="aos-init aos-animate"
          />
          <GalleryPhotoImg
            src="img/keyfeature3.png"
            alt=""
            draggable={false}
            // data-aos="fade-up"
            // className="aos-init aos-animate"
          />
          <GalleryPhotoImg
            src="img/keyfeature2.png"
            alt=""
            draggable={false}
            // data-aos="fade-up"
            // className="aos-init aos-animate"
          />
          <GalleryPhotoImg
            src="img/keyfeature1.png"
            alt=""
            draggable={false}
            // data-aos="fade-up"
            // className="aos-init aos-animate"
          />
        </Galleries>
      </HomeTop>
      <Footer />
    </Top>
  );
};
export default GalleryPage;
