import styled from "styled-components";
import {IButton} from './interface'


export const StyledButton = styled.div`
position: relative;
outline: none;
display: inline-block;
font-weight: 400;

color: ${(props:IButton) => {
  switch (props.variant) {
    case "primary":
      return "#fff";
    case "success":
      return "#fff";

    default:
      return "#000";
  }
}};
text-align: center;
vertical-align: middle;
user-select: none;
background-color: ${(props:IButton) => {
  if (props.outline) return "white";
  switch (props.variant) {
    case "primary":
      return "#3f6ad8";
    case "success":
      return "green";

    default:
      return "white";
  }
}};
border: 1px solid transparent;
border-color: #3f6ad8;
padding: 0.375rem 0.75rem;
font-size: 1rem;
line-height: 1.5;
border-radius: 0.25rem;
transition: color 0.15s, background-color 0.15s, border-color 0.15s,
  box-shadow 0.15s;
-webkit-appearance: button;
text-transform: none;
overflow: visible;
font-family: inherit;
text-indent: 0px;
text-shadow: none;
cursor: pointer;

&:hover {
  color: #fff;
  background-color: #2955c8;
  border-color: #2651be;
  text-decoration: none;
}

&:active {
  color: #fff;
  background-color: #1f44a3;
  border-color: #19306a;
}
`;
