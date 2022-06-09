import styled from "styled-components";
import { Box } from "@mui/material";

export const SidebarWrapper = styled(Box)`
  width: ${({ theme }) => theme.sidebar.width};
  color: ${({ theme }) => theme.sidebar.textColor};
  background: ${({ theme }) => theme.sidebar.background};
  box-shadow: ${({ theme }) => theme.sidebar.boxShadow};
  height: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    position: fixed;
    z-index: 10;
    border-top-right-radius: ${({ theme }) => theme.general.borderRadius};
    border-bottom-right-radius: ${({ theme }) => theme.general.borderRadius};
  }
`;

export const TopSection = styled(Box)`
  display: flex;
  height: 88px;
  align-items: center;
  margin: 0 ${({ theme }) => theme.spacing(2)};

  border-bottom: ${({ theme }) => theme.sidebar.dividerBg} solid 1px;
`;
