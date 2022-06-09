import styled from "styled-components";
import { Dialog, DialogTitle, TextField } from "@mui/material";

export const DialogWrapper = styled(Dialog)`
  .MuiDialog-container {
    height: auto;
  }

  .MuiDialog-paperScrollPaper {
    max-height: calc(100vh - 64px);
  }
`;

export const SearchInputWrapper = styled(TextField)`
  background: ${({ theme }) => theme.colors.alpha.white[100]};

  .MuiInputBase-input {
    font-size: ${({ theme }) => theme.typography.pxToRem(17)};
  }
`;

export const DialogTitleWrapper = styled(DialogTitle)`
  background: ${({ theme }) => theme.colors.alpha.black[5]};
  padding: ${({ theme }) => theme.spacing(3)};
`;
