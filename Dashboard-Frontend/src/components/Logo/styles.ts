import styled from "styled-components";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export const LogoWrapper = styled(Link)`
  color: ${({ theme }) => theme.palette.text.primary};
  padding: ${({ theme }) => theme.spacing(0, 1, 0, 0)};
  display: flex;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
`;

export const LogoSignWrapper = styled(Box)`
  width: 52px;
  height: 38px;
  margin-top: 4px;
  transform: scale(0.8);
`;

export const LogoTextWrapper = styled(Box)`
  padding-left: ${({ theme }) => theme.spacing(1)};
`;

export const VersionBadge = styled(Box)`
  background: ${({ theme }) => theme.palette.success.main};
  color: ${({ theme }) => theme.palette.success.contrastText};
  padding: ${({ theme }) => theme.spacing(0.4, 1)};
  border-radius: ${({ theme }) => theme.general.borderRadiusSm};
  text-align: center;
  display: inline-block;
  line-height: 1;
  font-size: ${({ theme }) => theme.typography.pxToRem(11)};
`;

export const LogoText = styled(Box)`
  font-size: ${({ theme }) => theme.typography.pxToRem(15)};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
`;
