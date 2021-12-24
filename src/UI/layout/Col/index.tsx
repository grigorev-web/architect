import { FC } from "react";
import { StyledCol } from "./styles";





const Col: FC = (props) => {
  return <StyledCol {...props}>{props.children}</StyledCol>;
};

export default Col;
