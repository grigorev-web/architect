import { FC } from "react";
import GlobalStyle from "./GlobalStyle";
import { StyledContainer } from "./styles";


const Container: FC = (props) => {
  return (
    <StyledContainer>
      <GlobalStyle />
      {props.children}
    </StyledContainer>
  );
};

export default Container;
