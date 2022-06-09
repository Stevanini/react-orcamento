import styled from "styled-components";

import { Box } from "@mui/material";

export const MainWrapper = styled(Box)`
  flex: 1 1 auto;
  display: flex;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    padding-left: ${({ theme }) => theme.sidebar.width}px;
  }
`;

export const MainContent = styled(Box)`
  margin-top: ${({ theme }) => theme.header.height}px;
  flex: 1 1 auto;
  overflow: auto;
`;
