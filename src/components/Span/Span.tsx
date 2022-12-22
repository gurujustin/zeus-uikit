import styled, { DefaultTheme } from "styled-components";
import { space, typography, layout } from "styled-system";
import getThemeValue from "../../util/getThemeValue";
import { SpanProps } from "./types";

interface ThemedProps extends SpanProps {
  theme: DefaultTheme;
}

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(`colors.${color}`, color)(theme);
};

const getFontSize = ({ fontSize}: SpanProps) => {
  return fontSize;
};

const getFontWeight = ({ fontWeight}: SpanProps) => {
  return fontWeight;
};

const Span = styled.span<SpanProps>`
  color: ${getColor};
  font-size: ${getFontSize};
  font-weight: ${getFontWeight};
  line-height: 1.5;

  ${space}
  ${typography}
  ${layout}
`;

Span.defaultProps = {
  color: "text",
};

export default Span;
