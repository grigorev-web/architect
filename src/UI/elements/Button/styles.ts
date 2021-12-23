import styled from "styled-components";
import {
  buttonBackgroundColor,
  buttonBackgroundColorActive,
  buttonBackgroundColorHover,
  buttonTextColor,
} from "./colors";
import { IButton } from "./interface";

export const StyledButton = styled.div`
position: relative;
outline: none;
display: inline-block;
font-weight: 500;

color: ${(props: IButton) => {
  return buttonTextColor[props.variant];
}}};
text-align: center;
vertical-align: middle;
user-select: none;
background-color: ${(props: IButton) => {
  if (props.outline) return "transparent";
  return buttonBackgroundColor[props.variant];
}};
border: 1px solid transparent;
border-color: ${(props: IButton) =>buttonBackgroundColor[props.variant]};
padding: 0.375rem 0.75rem;
font-size: 1rem;
line-height: 1.5;
border-radius: 0.25rem;
transition: color 0.15s, background-color 0.15s, border-color 0.15s,
  box-shadow 0.15s;
-webkit-appearance: button;
text-transform: none;
overflow: visible;
/* font-family: inherit; */
text-indent: 0px;
text-shadow: none;
margin: 3px;
cursor: pointer;

&:hover {
  color: #fff;
  background-color: ${(props: IButton) => {
    if (props.outline) return "transparent";
    return buttonBackgroundColorHover[props.variant];
  }};
  text-decoration: none;
}

&:active {
  color: #fff;
  background-color: ${(props: IButton) => {
    if (props.outline) return "transparent";
    return buttonBackgroundColorActive[props.variant];
  }};
}
`;
