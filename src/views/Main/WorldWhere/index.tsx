import React from "react";
import CusBtn from "component/CustomBtn";
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
  return (
    <WorldWhere>
      <RedGradient />
      <Top>
        <Title>
          In a world where all else is lost, survival costs everything
        </Title>
        <DarkContainer>
          <DarknessRow>
            <HeroImg src="img/worldman.png" alt="" draggable={false} />
            <DarkTextContainer ml="70px">
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
              <CusBtn text="Key Features" />
            </DarkTextContainer>
          </DarknessRow>
          <DarknessRow>
            <DarkTextContainer>
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
              <CusBtn text="Visit Gallery" />
            </DarkTextContainer>
            <HeroImg src="img/worldman2.png" alt="" draggable={false} />
          </DarknessRow>
        </DarkContainer>

        {/* key features */}

        <KeyTitle>Key features</KeyTitle>
        <KeyrowContainer>
          <DarknessRow>
            <HeroImg src="img/keyfeature1.png" alt="" draggable={false} />
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
            <HeroImg src="img/keyfeature2.png" alt="" draggable={false} />
          </DarknessRow>
          <DarknessRow>
            <HeroImg src="img/keyfeature3.png" alt="" draggable={false} />
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
