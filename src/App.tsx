import { FC } from "react";

import NavMenu from "./UI/components/NavMenu";
import NavLink from "./UI/components/NavMenu/NavLink";
import GlobalStyle from "./UI/global/GlobalStyle";
import { Dashboard1 } from "./UI/examples/Dashboard1";
import { Dashboard2 } from "./UI/examples/Dashboard2";

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <NavMenu>
        <NavLink label="Главная" path="/" element={<Dashboard1 />}/>
        <NavLink label="Блог" path="blog" element={<Dashboard2 />} />
        <NavLink label="Контакты" path="contacts" element={<Dashboard2 />} />
      </NavMenu>
    </>
  );
};

export default App;
