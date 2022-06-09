import styled from "styled-components";
import { Box } from "@mui/material";

export const HeaderWrapper = styled(Box)`
  height: ${({ theme }) => theme.header.height};
  color: ${({ theme }) => theme.header.textColor};
  padding: ${({ theme }) => theme.spacing(0, 2)};
  right: 0;
  z-index: 5;
  background-color: ${({ theme }) => theme.header.background};
  box-shadow: ${({ theme }) => theme.header.boxShadow};
  position: fixed;
  justify-content: space-between;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    left: ${({ theme }) => theme.sidebar.width};
    width: auto;
  }
`;
