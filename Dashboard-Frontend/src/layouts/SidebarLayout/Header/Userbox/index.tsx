import { useRef, useState } from "react";

import { NavLink } from "react-router-dom";

import {
  Avatar,
  Box,
  Button,
  Divider,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Popover,
} from "@mui/material";

import {
  AccountTreeTwoTone,
  Assignment,
  LockOpenTwoTone,
  ExpandMoreTwoTone,
} from "@mui/icons-material";

import {
  MenuUserBox,
  UserBoxButton,
  UserBoxDescription,
  UserBoxLabel,
  UserBoxText,
} from "./styles";

import ProfileAvatar from "src/assets/images/avatars/3.jpg";

function HeaderUserbox() {
  const user = {
    name: "Cléverson Faria",
    avatar: ProfileAvatar,
    jobtitle: "Funcionário",
  };

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
      <UserBoxButton color="secondary" ref={ref} onClick={handleOpen}>
        <Avatar variant="rounded" alt={user.name} src={user.avatar} />

        <Hidden mdDown>
          <UserBoxText>
            <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
            <UserBoxDescription variant="body2">
              {user.jobtitle}
            </UserBoxDescription>
          </UserBoxText>
        </Hidden>

        <Hidden smDown>
          <ExpandMoreTwoTone sx={{ ml: 1 }} />
        </Hidden>
      </UserBoxButton>

      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuUserBox sx={{ minWidth: 210 }} display="flex">
          <Avatar variant="rounded" alt={user.name} src={user.avatar} />
          <UserBoxText>
            <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
            <UserBoxDescription variant="body2">
              {user.jobtitle}
            </UserBoxDescription>
          </UserBoxText>
        </MenuUserBox>

        <Divider sx={{ mb: 0 }} />

        <List sx={{ p: 1 }} component="nav">
          <ListItem button to="/dashboard/mode" component={NavLink}>
            <AccountTreeTwoTone fontSize="small" />
            <ListItemText primary="Alterar modo" />
          </ListItem>
          <ListItem button to="/dashboard/profile/settings" component={NavLink}>
            <Assignment fontSize="small" />
            <ListItemText primary="Meus Dados" />
          </ListItem>
        </List>

        <Divider />

        <Box sx={{ m: 1 }}>
          <Button color="primary" fullWidth>
            <LockOpenTwoTone sx={{ mr: 1 }} />
            Sair
          </Button>
        </Box>
      </Popover>
    </>
  );
}

export default HeaderUserbox;
