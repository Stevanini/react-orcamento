import styled from "styled-components";
import { Badge, alpha } from "@mui/material";

export const NotificationsBadge = styled(Badge)`
  .MuiBadge-badge {
    background-color: ${({ theme }) => alpha(theme.palette.error.main, 0.1)};
    color: ${({ theme }) => theme.palette.error.main};
    min-width: 16px;
    height: 16px;
    padding: 0;

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      box-shadow: 0 0 0 1px
        ${({ theme }) => alpha(theme.palette.error.main, 0.3)};
      content: "";
    }
  }
`;
