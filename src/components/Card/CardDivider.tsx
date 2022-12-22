import styled, { DefaultTheme, ThemeConsumer } from "styled-components";
import { space, SpaceProps } from "styled-system";
import { CardDividerProps } from "./types";

interface StyledCardDividerProps extends CardDividerProps {
    theme: DefaultTheme;
}

const StyledCardDivider = styled.div<Partial<StyledCardDividerProps>>`
  background: ${({ theme }) => theme.colors.cardDivider};
  width: 95%;
  height: 1px;
  margin-left: 2.5%;
  padding: 0 10px;
//   color: ${({ theme }) => theme.colors.cardDivider};
  opacity: ${({ opacity }) => opacity};
`;

const CardDivider: React.FC<CardDividerProps> = ({ opacity, ...props }) => {
    return (
      <StyledCardDivider {...props}>
        {space}
      </StyledCardDivider>
    );
};

CardDivider.defaultProps = {
    opacity: 0.6,
};
  
export default CardDivider;
  
