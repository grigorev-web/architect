import { FC } from "react";
import Button from "./UI/elements/Button";
import AppContainer from "./UI/layout/AppContainer";

const App:FC = () => {
  return (
    <AppContainer>
      <Button>123</Button>
      <Button>321</Button>
    </AppContainer>
  );
};

export default App;
