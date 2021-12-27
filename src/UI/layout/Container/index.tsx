import { FC } from "react";

import { StyledContainer } from "./styles";

const Container: FC = (props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default Container;
