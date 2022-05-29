import React from "react";
import { Top, MenuItem, MenuImg, Text } from "./income.style";
const SubMenu = () => {
  return (
    <Top>
      <MenuItem>
        <MenuImg src="img/buildyourdeck.png" alt="" draggable={false} />
        <Text>Build your deck</Text>
      </MenuItem>
      <MenuItem>
        <MenuImg src="img/exploredistinct.png" alt="" draggable={false} />
        <Text>Explore distinct areas</Text>
      </MenuItem>
      <MenuItem>
        <MenuImg src="img/fight.png" alt="" draggable={false} />
        <Text>Fight fearsome enemies</Text>
      </MenuItem>
      <MenuItem>
        <MenuImg src="img/defeat.png" alt="" draggable={false} />
        <Text>Defeat terrifying bosses</Text>
      </MenuItem>
    </Top>
  );
};
export default SubMenu;
