import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { BaseButtonProps, PolymorphicComponent, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps["as"];
}

const InactiveButton: PolymorphicComponent<InactiveButtonProps, "button"> = styled(Button)<InactiveButtonProps>`
  background-color: transparent;
  color: ${({ theme, variant }) => (variant === variants.PRIMARY ? theme.colors.primary : theme.colors.textSubtle)};
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`;
const StyledButton = styled(Button)<BaseButtonProps>`
  margin-bottom: 10px;
  padding-top: 12px;
  font-weight: 500;
  letter-spacing: 0.03em;
  color: ${({ theme }) => `${theme.colors.primaryBright}`};
  // box-shadow: ${({ theme }) => `0px 4px 0px ${theme.colors.primaryBright}!important`};

  &:after {
    margin-top: 12px;
    content: "";
    display: block;
    background: ${({ theme }) => `${theme.colors.primaryBright}`};
    height: 4px;
    width: 100%;
  }
`

const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps, "button"> = ({
  isActive = false,
  variant = variants.PRIMARY,
  as,
  ...props
}: ButtonMenuItemProps) => {
  if (!isActive) {
    return <InactiveButton forwardedAs={as} variant={variant} {...props} />;
  }

  return <StyledButton as={as} variant={variant} {...props} />;
};

export default ButtonMenuItem;
