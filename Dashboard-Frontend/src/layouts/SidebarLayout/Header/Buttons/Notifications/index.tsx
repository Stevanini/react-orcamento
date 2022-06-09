import { useRef, useState } from "react";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  Popover,
  Tooltip,
  Typography,
} from "@mui/material";
import NotificationsActiveTwoToneIcon from "@mui/icons-material/NotificationsActiveTwoTone";

import { formatDistance, subDays } from "date-fns";
import { ptBR } from "date-fns/locale";

import { NotificationsBadge } from "./styles";

function HeaderNotifications() {
  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip arrow title="Notificações">
        <IconButton color="primary" ref={ref} onClick={handleOpen}>
          <NotificationsBadge
            badgeContent={1}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <NotificationsActiveTwoToneIcon />
          </NotificationsBadge>
        </IconButton>
      </Tooltip>

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
        <Box
          sx={{ p: 2 }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">Notificações</Typography>
        </Box>

        <Divider />

        <List sx={{ p: 0 }}>
          <ListItem
            sx={{ p: 2, minWidth: 350, display: { xs: "block", sm: "flex" } }}
          >
            <Box flex="1">
              <Box display="flex" justifyContent="space-between">
                <Typography sx={{ fontWeight: "bold" }}>
                  Titulo da mensagem
                </Typography>
                <Typography variant="caption" sx={{ textTransform: "none" }}>
                  {formatDistance(subDays(new Date(), 3), new Date(), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </Typography>
              </Box>

              <Typography
                component="span"
                variant="body2"
                color="text.secondary"
              >
                novas mensagens na caixa
              </Typography>
            </Box>
          </ListItem>
        </List>
      </Popover>
    </>
  );
}

export default HeaderNotifications;
