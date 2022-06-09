import styled from "styled-components";

export const LabelWrapper = styled("span")`
  background-color: ${({ theme }) => theme.colors.alpha.black[5]};
  padding: ${({ theme }) => theme.spacing(0.5, 1)};
  font-size: ${({ theme }) => theme.typography.pxToRem(13)};
  border-radius: ${({ theme }) => theme.general.borderRadius};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-height: ${({ theme }) => theme.spacing(3)};

  &.MuiLabel {
    &-primary {
      background-color: ${({ theme }) => theme.colors.primary.lighter};
      color: ${({ theme }) => theme.palette.primary.main};
    }

    &-secondary {
      background-color: ${({ theme }) => theme.colors.secondary.lighter};
      color: ${({ theme }) => theme.palette.secondary.main};
    }

    &-success {
      background-color: ${({ theme }) => theme.colors.success.lighter};
      color: ${({ theme }) => theme.palette.success.main};
    }

    &-warning {
      background-color: ${({ theme }) => theme.colors.warning.lighter};
      color: ${({ theme }) => theme.palette.warning.main};
    }

    &-error {
      background-color: ${({ theme }) => theme.colors.error.lighter};
      color: ${({ theme }) => theme.palette.error.main};
    }

    &-info {
      background-color: ${({ theme }) => theme.colors.info.lighter};
      color: ${({ theme }) => theme.palette.info.main};
    }
  }
`;
