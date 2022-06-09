import styled from "styled-components";
import { List } from "@mui/material";

export const MenuWrapper = styled(List)`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  padding: 0;

  .MuiListSubheader-root {
    text-transform: uppercase;
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.pxToRem(12)};
    color: ${({ theme }) => theme.sidebar.menuItemHeadingColor};
    padding: ${({ theme }) => theme.spacing(0.8, 2)};
    line-height: 1.4;
  }
`;

export const SubMenuWrapper = styled(List)`
  &.MuiList-root {
    padding: 0;

    .MuiList-root .MuiList-root .MuiListItem-root .MuiButton-root {
      font-weight: normal !important;
    }

    .MuiListItem-root {
      padding: 2px ${({ theme }) => theme.spacing(2)};

      .MuiButton-root {
        display: flex;
        color: ${({ theme }) => theme.sidebar.menuItemColor};
        background-color: ${({ theme }) => theme.sidebar.menuItemBg};
        width: 100%;
        justify-content: flex-start;
        font-size: ${({ theme }) => theme.typography.pxToRem(13)};
        padding-top: ${({ theme }) => theme.spacing(0.8)};
        padding-bottom: ${({ theme }) => theme.spacing(0.8)};
        position: relative;

        .MuiButton-startIcon,
        .MuiButton-endIcon {
          transition: ${({ theme }) => theme.transitions.create(["color"])};

          .MuiSvgIcon-root {
            font-size: inherit;
            transition: none;
          }
        }

        .MuiButton-startIcon {
          font-size: ${({ theme }) => theme.typography.pxToRem(26)};
          margin-right: ${({ theme }) => theme.spacing(1.5)};
          color: ${({ theme }) => theme.sidebar.menuItemIconColor};
        }

        .MuiButton-endIcon {
          margin-left: auto;
          font-size: ${({ theme }) => theme.typography.pxToRem(22)};
        }

        &.Mui-active,
        &:hover {
          background-color: ${({ theme }) => theme.sidebar.menuItemBgActive};
          color: ${({ theme }) => theme.sidebar.menuItemColorActive};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            color: ${({ theme }) => theme.sidebar.menuItemIconColorActive};
          }
        }
      }

      &.Mui-children {
        flex-direction: column;
        line-height: 1;
      }
    }
  }
`;
