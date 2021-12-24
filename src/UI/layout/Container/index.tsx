import { FC } from "react";
import GlobalStyle from "../../global/GlobalStyle";
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
