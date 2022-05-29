import React from "react";
import { Top, MenuItem, MenuImg, Text } from "./income.style";
const SubMenu = () => {
  return (
    <Top>
      <MenuItem>
        <MenuImg src="img/buildyourdeck.png" alt="" />
        <Text>Build your deck</Text>
      </MenuItem>
      <MenuItem>
        <MenuImg src="img/exploredistinct.png" alt="" />
        <Text>Explore distinct areas</Text>
      </MenuItem>
      <MenuItem>
        <MenuImg src="img/fight.png" alt="" />
        <Text>Fight fearsome enemies</Text>
      </MenuItem>
      <MenuItem>
        <MenuImg src="img/defeat.png" alt="" />
        <Text>Defeat terrifying bosses</Text>
      </MenuItem>
    </Top>
  );
};
export default SubMenu;
