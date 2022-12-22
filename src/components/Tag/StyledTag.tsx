import styled, { DefaultTheme } from "styled-components";
import { space, variant, typography } from "styled-system";
import { Colors } from "../../theme/types";
import { scaleVariants, styleVariants } from "./theme";
import { TagProps, variants } from "./types";

interface ThemedProps extends TagProps {
  theme: DefaultTheme;
}

const getOutlineStyles = ({ outline, theme, variant: variantKey = variants.PRIMARY }: ThemedProps) => {
  const themeColorKey = styleVariants[variantKey].color as keyof Colors;
  const color = theme.colors[themeColorKey];
  
  if (outline) {
    return `
      color: ${color};
      border: 1px solid ${color};
    `;
  } else {
    return `
      color: ${color};
    `;
  }

  return "";
};

export const StyledTag = styled.div<ThemedProps>`
  background: transparent;
  align-items: center;
  border-radius: 16px;
  display: inline-flex;
  font-weight: 400;
  white-space: nowrap;

  & > svg {
    fill: currentColor;
  }

  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}

  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}
  ${variant({
    variants: styleVariants,
  })}
  ${space}
  ${typography}

  ${getOutlineStyles}
`;

export default null;
