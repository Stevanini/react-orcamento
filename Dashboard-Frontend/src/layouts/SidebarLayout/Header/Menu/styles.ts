import styled from "styled-components";
import { Box } from "@mui/material";

export const ListWrapper = styled(Box)`
  .MuiTouchRipple-root {
    display: none;
  }

  .MuiListItem-root {
    transition: ${({ theme }) => theme.transitions.create(["color", "fill"])};

    &.MuiListItem-indicators {
      padding: ${({ theme }) => theme.spacing(1, 2)};

      .MuiListItemText-root {
        .MuiTypography-root {
          &:before {
            height: 4px;
            width: 22px;
            opacity: 0;
            visibility: hidden;
            display: block;
            position: absolute;
            bottom: -10px;
            transition: all 0.2s;
            border-radius: ${({ theme }) => theme.general.borderRadiusLg};
            content: "";
            background: ${({ theme }) => theme.colors.primary.main};
          }
        }
      }

      &.active,
      &:active,
      &:hover {
        background: transparent;

        .MuiListItemText-root {
          .MuiTypography-root {
            &:before {
              opacity: 1;
              visibility: visible;
              bottom: 0px;
            }
          }
        }
      }
    }
  }
`;
