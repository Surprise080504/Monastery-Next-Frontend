import React, { useEffect } from "react";
import CusBtn from "component/CustomBtn";
import { useRouter } from "next/router";
import {
  Top,
  Title,
  WorldWhere,
  RedGradient,
  DarknessRow,
  HeroImg,
  DarkTextContainer,
  DarkTitle,
  DarkText,
  KeyTitle,
  KeyrowContainer,
  DarkTextImg,
  DarkContainer,
  KeyTextContainer,
  KeyTextRow,
} from "./worldwhere.style";
const SubMenu = () => {
  const router = useRouter();
  let scrollPos = 0;
  let temp = 0;
  useEffect(() => {
    scrollPos = document.documentElement.scrollTop;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const man1: any = document.getElementById("man1");
    const man1W: any = document.getElementById("man1-wrapper");
    const man2: any = document.getElementById("man2");
    const manY = [
      {
        elem: man1,
        y:
          man1W?.getBoundingClientRect().y +
          man1W?.getBoundingClientRect().height,
      },
    ];
    const scrollTop = document.documentElement.scrollTop;

    for (let i = 0; i < manY.length; i++) {
      if (manY[i].y < window.innerHeight && manY[i].y > 0) {
        manY[i].elem.style.transform = `translateY(${temp}px)`;
        if (scrollPos > scrollTop) {
          if (temp < 0) temp += 2.5;
        } else {
          if (temp > -100) temp -= 2.5;
        }
        scrollPos = scrollTop;
      }
    }
  };
  return (
    <WorldWhere>
      <RedGradient />
      <Top>
        <Title>
          In a world where all else is lost, survival costs everything
        </Title>
        <DarkContainer>
          <DarknessRow>
            <div id="man1-wrapper">
              <HeroImg
                src="img/worldman.png"
                alt=""
                draggable={false}
                id="man1"
              />
            </div>
            <DarkTextContainer
              ml="70px"
              data-aos="fade-left"
              className="aos-init aos-animate"
            >
              <DarkTitle>Darkness awaits…</DarkTitle>
              <DarkText>
                The Monastery is a roguelite deckbuilder that follows the
                twisted faith of a lonely survivor of the Witchplague. The
                region you are about to roam is crawling with bandits and
                monsters of all kinds.
                <br />
                <br />
                Yet, you must make your way through it to find loot that
                increases your survival. But be aware - darkness awaits outside
                of the gates of the Monastery!
              </DarkText>
              <a href="#keyfeatures">
                <CusBtn text="Key Features" />
              </a>
            </DarkTextContainer>
          </DarknessRow>
          <DarknessRow>
            <DarkTextContainer
              data-aos="fade-right"
              className="aos-init aos-animate"
            >
              <DarkTitle>Be prepared!</DarkTitle>
              <DarkText>
                Monastery offers plenty of challenges! Cut through different
                hazardous terrains, each with unique fauna. Be prepared, attacks
                come from multiple sides, you always have to watch your back.
                <br />
                <br />
                Choose your weapons and equipment wisely to best suit your play
                style. It's the only way to beat the terrifying bosses.
              </DarkText>
              <span onClick={() => router.push("/gallery")}>
                <CusBtn text="Visit Gallery" />
              </span>
            </DarkTextContainer>
            <HeroImg
              src="img/worldman2.png"
              alt=""
              draggable={false}
              id="man2"
            />
          </DarknessRow>
        </DarkContainer>

        {/* key features */}

        <KeyTitle id="keyfeatures">Key features</KeyTitle>
        <KeyrowContainer>
          <DarknessRow>
            <HeroImg
              src="img/keyfeature1.png"
              alt=""
              draggable={false}
              data-aos="zoom-in"
              className="aos-init aos-animate"
            />
            <KeyTextContainer>
              <KeyTextRow>
                <DarkTextImg src="img/limark.png" alt="" draggable={false} />
                <span>
                  You are what you wear. Collect different kinds of gear, each
                  with its unique card pool, to fit your playstyle.
                </span>
              </KeyTextRow>
              <KeyTextRow>
                <DarkTextImg src="img/limark.png" alt="" draggable={false} />
                <span>
                  Diverse areas and opponents. Each fauna has its dominant enemy
                  type with special abilities and loot.
                </span>
              </KeyTextRow>
              <KeyTextRow>
                <DarkTextImg src="img/limark.png" alt="" draggable={false} />
                <span>
                  Dynamic deck building and adaptation system. Choose the right
                  cards, adaptations, boons and item upgrades through each run
                  to exploit your enemies' weaknesses.
                </span>
              </KeyTextRow>
            </KeyTextContainer>
          </DarknessRow>
          <DarknessRow>
            <KeyTextContainer>
              <KeyTextRow>
                <DarkTextImg src="img/limark.png" alt="" draggable={false} />
                <span>
                  You are what you wear. Collect different kinds of gear, each
                  with its unique card pool, to fit your playstyle.
                </span>
              </KeyTextRow>
              <KeyTextRow>
                <DarkTextImg src="img/limark.png" alt="" draggable={false} />
                <span>
                  Diverse areas and opponents. Each fauna has its dominant enemy
                  type with special abilities and loot.
                </span>
              </KeyTextRow>
              <KeyTextRow>
                <DarkTextImg src="img/limark.png" alt="" draggable={false} />
                <span>
                  Dynamic deck building and adaptation system. Choose the right
                  cards, adaptations, boons and item upgrades through each run
                  to exploit your enemies' weaknesses.
                </span>
              </KeyTextRow>
            </KeyTextContainer>
            <HeroImg
              src="img/keyfeature2.png"
              alt=""
              draggable={false}
              data-aos="zoom-in"
              className="aos-init aos-animate"
            />
          </DarknessRow>
          <DarknessRow>
            <HeroImg
              src="img/keyfeature3.png"
              alt=""
              draggable={false}
              data-aos="zoom-in"
              className="aos-init aos-animate"
            />
            <KeyTextContainer>
              <KeyTextRow>
                <DarkTextImg src="img/limark.png" alt="" draggable={false} />
                <span>
                  You are what you wear. Collect different kinds of gear, each
                  with its unique card pool, to fit your playstyle.
                </span>
              </KeyTextRow>
              <KeyTextRow>
                <DarkTextImg src="img/limark.png" alt="" draggable={false} />
                <span>
                  Diverse areas and opponents. Each fauna has its dominant enemy
                  type with special abilities and loot.
                </span>
              </KeyTextRow>
              <KeyTextRow>
                <DarkTextImg src="img/limark.png" alt="" draggable={false} />
                <span>
                  Dynamic deck building and adaptation system. Choose the right
                  cards, adaptations, boons and item upgrades through each run
                  to exploit your enemies' weaknesses.
                </span>
              </KeyTextRow>
            </KeyTextContainer>
          </DarknessRow>
        </KeyrowContainer>
      </Top>
    </WorldWhere>
  );
};
export default SubMenu;
