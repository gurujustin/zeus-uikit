import React from "react";
import styled from "styled-components";
import { SvgProps } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Flex from "../../../components/Box/Flex";
import Button from "../../../components/Button/Button";
import * as IconModule from "../icons";

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon } = Icons;

interface Props {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
}

const SubNavThemeSwitcherContainer = styled.div`
  display: none;
  align-items: center;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 100%;
    display: flex;
  }
  .right-eye {
    animation-delay: 20ms;
  }
`;

const SubNavThemeSwitcher: React.FC<Props> = ({ isDark, toggleTheme }) => (
  <Button variant="text" padding="0px" onClick={() => toggleTheme(!isDark)}>
    {/* alignItems center is a Safari fix */}
    <SubNavThemeSwitcherContainer>
      <SunIcon color={isDark ? "textDisabled" : "text"} width="20px" />
      <Text color="textDisabled" mx="4px" small={true}>
        /
      </Text>
      <MoonIcon color={isDark ? "text" : "textDisabled"} width="20px" />
    </SubNavThemeSwitcherContainer>
  </Button>
);

export default React.memo(SubNavThemeSwitcher, (prev, next) => prev.isDark === next.isDark);
