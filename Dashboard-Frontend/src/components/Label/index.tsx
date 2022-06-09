import React from "react";

import { LabelWrapper } from "./styles";
import { LabelProps } from "./types";

export const Label: React.FC<LabelProps> = ({
  className,
  color = "secondary",
  children,
  ...rest
}) => {
  return (
    <LabelWrapper className={"MuiLabel-" + color} {...rest}>
      {children}
    </LabelWrapper>
  );
};
