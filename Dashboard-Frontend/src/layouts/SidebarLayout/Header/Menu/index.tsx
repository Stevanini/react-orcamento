import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";

import { ExpandMoreTwoTone } from "@mui/icons-material";

import { ListWrapper } from "./styles";

function HeaderMenu() {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <ListWrapper>
        <List disablePadding component={Box} display="flex">
          <ListItem
            classes={{ root: "MuiListItem-indicators" }}
            button
            component={NavLink}
            to="/dashboard/Test1"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Teste 1"
            />
          </ListItem>
          <ListItem
            classes={{ root: "MuiListItem-indicators" }}
            button
            component={NavLink}
            to="/dashboard/Teste2"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Teste 2"
            />
          </ListItem>
          <ListItem
            classes={{ root: "MuiListItem-indicators" }}
            button
            ref={ref}
            onClick={handleOpen}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={
                <Box display="flex" alignItems="center">
                  Outros
                  <Box display="flex" alignItems="center" pl={0.3}>
                    <ExpandMoreTwoTone fontSize="small" />
                  </Box>
                </Box>
              }
            />
          </ListItem>
        </List>
      </ListWrapper>

      <Menu anchorEl={ref.current} onClose={handleClose} open={isOpen}>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/dashboard/Teste3">
          Teste 3
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/dashboard/Teste4">
          Teste 4
        </MenuItem>
      </Menu>
    </>
  );
}

export default HeaderMenu;
