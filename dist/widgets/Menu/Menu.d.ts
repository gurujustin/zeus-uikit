import React from "react";
import { DefaultTheme } from "styled-components";
import { NavProps } from "./types";
export interface Props {
    isActive?: boolean;
    primaryMenu?: boolean;
    theme: DefaultTheme;
}
declare const Menu: React.FC<NavProps>;
export default Menu;
