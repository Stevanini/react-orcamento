import React from "react";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import { Typography, Button, Grid } from "@mui/material";

import { PageTitleProps } from "./types";

export const PageTitle: React.FC<PageTitleProps> = ({
  heading = "",
  subHeading = "",
  textButton = "",
  iconButton,
  onClick,
  ...rest
}) => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      {...rest}
    >
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {heading}
        </Typography>
        <Typography variant="subtitle2">{subHeading}</Typography>
      </Grid>

      {!!textButton && (
        <Grid item>
          <Button
            onClick={onClick}
            sx={{ mt: { xs: 2, md: 0 } }}
            variant="contained"
            startIcon={iconButton ? iconButton : <AddTwoToneIcon />}
          >
            {textButton}
          </Button>
        </Grid>
      )}
    </Grid>
  );
};
