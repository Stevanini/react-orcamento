import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

import { BaseLayoutProps } from "./types";

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        flex: 1,
        height: "100%",
      }}
    >
      {children || <Outlet />}
    </Box>
  );
};
