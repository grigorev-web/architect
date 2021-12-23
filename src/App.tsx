import { FC } from "react";
import { PageText } from "./amazon/helpers/PageText";
import Navbar from "./amazon/navbar";
import { Container } from "./amazon/navbar/styles";

import Button from "./UI/elements/Button/";
import AppContainer from "./UI/layout/AppContainer";

const App: FC = () => {
  return (
    <>
      <Container>
        <Navbar />
      </Container>

      <Button variant="success" size="sm">
        123
      </Button>

      <Button variant="primary">second button</Button>
    </>
  );
};

export default App;
