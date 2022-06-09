import { useContext } from "react";

import { Box, Hidden, IconButton, Tooltip } from "@mui/material";
import { MenuTwoTone, CloseTwoTone } from "@mui/icons-material";
import { SidebarContext } from "src/contexts/SidebarContext";

import { Logo } from "src/components";

import HeaderMenu from "./Menu";
import HeaderButtons from "./Buttons";
import HeaderUserbox from "./Userbox";

import { HeaderWrapper } from "./styles";

function Header() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);

  return (
    <HeaderWrapper display="flex" alignItems="center">
      <Box display="flex" alignItems="center">
        <Hidden lgUp>
          <Logo />
        </Hidden>
      </Box>

      <Box display="flex" alignItems="center">
        <HeaderButtons />
        <HeaderUserbox />

        <Hidden lgUp>
          <Tooltip arrow title="Toggle Menu">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? <MenuTwoTone /> : <CloseTwoTone />}
            </IconButton>
          </Tooltip>
        </Hidden>
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
