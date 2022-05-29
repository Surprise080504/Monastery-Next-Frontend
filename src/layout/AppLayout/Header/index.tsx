import React, { useState } from "react";
import { FaBars, FaDiscord, FaSteam } from "react-icons/fa";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { useRouter } from "next/router";
import {
  HeaderMain,
  HeaderLeft,
  HeaderRight,
  HeaderLogo,
  HeaderItemText,
  HeaderTextItemGrp,
  SocialGrp,
} from "./Header.style";
const HeaderContainer = () => {
  const router = useRouter();
  const [resmenu, setmenu] = useState(false);

  return (
    <HeaderMain>
      <HeaderLeft
        onClick={() => {
          router.push("/");
        }}
      >
        <HeaderLogo src="img/logo.png" draggable={false} alt="" />
      </HeaderLeft>

      <HeaderRight>
        {resmenu ? (
          <MdOutlineClose
            className="resbarIcon"
            onClick={() => setmenu(false)}
          />
        ) : (
          <FaBars className="resbarIcon" onClick={() => setmenu(true)} />
        )}
        <HeaderTextItemGrp>
          <HeaderItemText>Key Features</HeaderItemText>
          <HeaderItemText>Gallery</HeaderItemText>
          <HeaderItemText>Contact</HeaderItemText>
          <HeaderItemText>About Us</HeaderItemText>
        </HeaderTextItemGrp>
        <SocialGrp>
          <FaDiscord className="socialIcon" />
          <BsFacebook className="socialIcon" />
          <BsTwitter className="socialIcon" />
          <BsYoutube className="socialIcon" />
          <FaSteam className="socialIcon" />
        </SocialGrp>
      </HeaderRight>
    </HeaderMain>
  );
};
export default HeaderContainer;
