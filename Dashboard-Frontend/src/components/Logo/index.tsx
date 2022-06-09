import React from "react";
import { Tooltip } from "@mui/material";

import LogoSystem from "src/assets/images/overview/logo.png";

import {
  LogoSignWrapper,
  LogoText,
  LogoTextWrapper,
  LogoWrapper,
  VersionBadge,
} from "./styles";
import { LogoProps } from "./types";

export const Logo: React.FC<LogoProps> = ({ onlyLogo, redirect, ...props }) => {
  return (
    <LogoWrapper to={redirect || "/dashboard"} {...props}>
      <LogoSignWrapper>
        <img src={LogoSystem} alt="Logotipo do sistema de orçamento" />
      </LogoSignWrapper>
      {!onlyLogo && (
        <LogoTextWrapper>
          <Tooltip title="Versão 1.0.0" arrow placement="right">
            <VersionBadge>1.0</VersionBadge>
          </Tooltip>
          <LogoText>Sistema de Orçamento</LogoText>
        </LogoTextWrapper>
      )}
    </LogoWrapper>
  );
};
