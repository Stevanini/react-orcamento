import styled from "styled-components";
import { Box } from "@mui/material";

export const FooterWrapper = styled(Box)`
  margin: ${({ theme }) => theme.spacing(2)} 0;
  color: ${({ theme }) => theme.header.textColor};
  right: 0;
  bottom: 0;
  z-index: 5;
  position: fixed;
  justify-content: space-between;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    left: ${({ theme }) => theme.sidebar.width};
    width: auto;
  }
`;
