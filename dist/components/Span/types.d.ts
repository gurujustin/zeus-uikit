import { LayoutProps, SpaceProps, TypographyProps } from "styled-system";
export interface SpanProps extends SpaceProps, TypographyProps, LayoutProps {
    color?: string;
    fontSize?: string;
    fontWeight?: string;
}
