import styled from "styled-components";

import { Box, Button, OutlinedInput } from "@mui/material";

export const MainContent = styled(Box)`
  height: 100%;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const OutlinedInputWrapper = styled(OutlinedInput)`
  background-color: ${({ theme }) => theme.colors.alpha.white[100]};
`;

export const ButtonSearch = styled(Button)`
  margin-right: -${({ theme }) => theme.spacing(1)};
`;
