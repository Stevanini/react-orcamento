import styled from "styled-components";
import { Button, Box, Typography, lighten } from "@mui/material";

export const UserBoxButton = styled(Button)`
  padding-left: ${({ theme }) => theme.spacing(1)};
  padding-right: ${({ theme }) => theme.spacing(1)};
`;

export const MenuUserBox = styled(Box)`
  background: ${({ theme }) => theme.colors.alpha.black[5]};
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const UserBoxText = styled(Box)`
  text-align: left;
  padding-left: ${({ theme }) => theme.spacing(1)};
`;

export const UserBoxLabel = styled(Typography)`
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  color: ${({ theme }) => theme.palette.secondary.main};
  display: block;
`;

export const UserBoxDescription = styled(Typography)`
  color: ${({ theme }) => lighten(theme.palette.secondary.main, 0.5)};
`;
