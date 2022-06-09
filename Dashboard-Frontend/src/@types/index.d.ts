declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

import "styled-components";
import { Theme } from "@mui/material";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
