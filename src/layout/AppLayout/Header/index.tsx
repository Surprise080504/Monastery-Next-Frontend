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
  ResMenu,
  ResIcons,
  ResTop,
} from "./Header.style";
const routerData = [
  {
    name: "Key Features",
    path: "/",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "About Us",
    path: "/about",
  },
];
const HeaderContainer = () => {
  const router = useRouter();
  const [resmenu, setmenu] = useState(false);

  return (
    <React.Fragment>
      <HeaderMain>
        <HeaderLeft
          onClick={() => {
            router.push("/");
          }}
        >
          <HeaderLogo src="img/logo.png" draggable={false} alt="" />
        </HeaderLeft>
        <ResIcons>
          <FaBars className="resbarIcon" onClick={() => setmenu(true)} />
        </ResIcons>
        <HeaderRight>
          <HeaderTextItemGrp>
            {routerData.map((e, index) => (
              <HeaderItemText key={index} onClick={() => router.push(e.path)}>
                {e.name}
              </HeaderItemText>
            ))}
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
      {resmenu && (
        <ResMenu>
          <ResTop>
            <HeaderLeft
              onClick={() => {
                router.push("/");
              }}
            >
              <HeaderLogo src="img/logo.png" draggable={false} alt="" />
            </HeaderLeft>
            <ResIcons>
              <MdOutlineClose
                className="resbarIcon"
                onClick={() => setmenu(false)}
              />
            </ResIcons>
          </ResTop>
          <HeaderTextItemGrp>
            {routerData.map((e, index) => (
              <HeaderItemText key={index} onClick={() => router.push(e.path)}>
                {e.name}
              </HeaderItemText>
            ))}
          </HeaderTextItemGrp>
          <SocialGrp>
            <FaDiscord className="socialIcon" />
            <BsFacebook className="socialIcon" />
            <BsTwitter className="socialIcon" />
            <BsYoutube className="socialIcon" />
            <FaSteam className="socialIcon" />
          </SocialGrp>
        </ResMenu>
      )}
    </React.Fragment>
  );
};
export default HeaderContainer;
