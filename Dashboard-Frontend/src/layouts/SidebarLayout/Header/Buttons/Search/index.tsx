import { forwardRef, useRef, useState, ReactElement, ChangeEvent } from "react";
import {
  Avatar,
  Link,
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  lighten,
  List,
  ListItem,
  ListItemAvatar,
  Theme,
  Tooltip,
  Typography,
  DialogContent,
  Slide,
  Hidden,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import FindInPageTwoToneIcon from "@mui/icons-material/FindInPageTwoTone";

import ChevronRightTwoToneIcon from "@mui/icons-material/ChevronRightTwoTone";

import {
  DialogWrapper,
  SearchInputWrapper,
  DialogTitleWrapper,
} from "./styles";

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement<any, any> },
  ref: any
) {
  return (
    <Slide direction="down" ref={ref} {...props}>
      {props.children}
    </Slide>
  );
});

function HeaderSearch() {
  const [openSearchResults, setOpenSearchResults] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);

    if (event.target.value) {
      if (!openSearchResults) {
        setOpenSearchResults(true);
      }
    } else {
      setOpenSearchResults(false);
    }
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip arrow title="Pesquisar">
        <IconButton color="primary" onClick={handleClickOpen}>
          <SearchTwoToneIcon />
        </IconButton>
      </Tooltip>

      <DialogWrapper
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth="md"
        fullWidth
        scroll="paper"
        onClose={handleClose}
      >
        <DialogTitleWrapper>
          <SearchInputWrapper
            value={searchValue}
            autoFocus={true}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchTwoToneIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Digite aqui para pesquisar..."
            fullWidth
            label="Pesquisar"
          />
        </DialogTitleWrapper>

        <Divider />

        {openSearchResults && (
          <DialogContent>
            <Box
              sx={{ pt: 0, pb: 1 }}
              display="flex"
              justifyContent="space-between"
            >
              <Typography variant="body2" component="span">
                Resultados da busca para{" "}
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="body1"
                  component="span"
                >
                  {searchValue}
                </Typography>
              </Typography>
            </Box>

            <Divider sx={{ my: 1 }} />

            <List disablePadding>
              <ListItem button>
                <Hidden smDown>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        background: (theme: Theme) =>
                          theme.palette.secondary.main,
                      }}
                    >
                      <FindInPageTwoToneIcon />
                    </Avatar>
                  </ListItemAvatar>
                </Hidden>

                <Box flex="1">
                  <Box display="flex" justifyContent="space-between">
                    <Link
                      href="#"
                      underline="hover"
                      sx={{ fontWeight: "bold" }}
                      variant="body2"
                    >
                      Titulo
                    </Link>
                  </Box>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{
                      color: (theme: Theme) =>
                        lighten(theme.palette.secondary.main, 0.5),
                    }}
                  >
                    Descrição
                  </Typography>
                </Box>
                <ChevronRightTwoToneIcon />
              </ListItem>
              <Divider sx={{ my: 1 }} component="li" />
            </List>

            <Divider sx={{ mt: 1, mb: 2 }} />

            <Box sx={{ textAlign: "center" }}>
              <Button color="primary">Ver mais resultados</Button>
            </Box>
          </DialogContent>
        )}
      </DialogWrapper>
    </>
  );
}

export default HeaderSearch;
