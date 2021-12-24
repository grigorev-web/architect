import { FC } from "react";
import Container from "./UI/layout/Container";

import Button from "./UI/elements/Button/";
import Col from "./UI/layout/Col";
import Row from "./UI/layout/Row";
import NavMenu from "./UI/components/NavMenu";
import NavLink from "./UI/components/NavMenu/NavLink";




const App: FC = () => {
  return (
    <>
      <NavMenu>
        <NavLink/>
        <NavLink/>
        <NavLink/>
      </NavMenu>
      <Container>
        
        <Row>
        <Col>
          <Button variant="primary">Основной</Button>
          <Button variant="secondary">Второстепенный</Button>
          <Button variant="success">Успех</Button>
          
          <Button variant="info">Инфо</Button>
          <Button variant="warning">Внимание</Button>
          <Button variant="danger">Опасность</Button>
          <Button variant="focus">фокус</Button>
          <Button variant="alt">альтернатива</Button>
          <Button variant="light">светлый</Button>
          <Button variant="dark">тёмный</Button>
          <Button variant="link">ссылка</Button>
        </Col>
        <Col>
          <p>
            Учитывая ключевые сценарии поведения, курс на
            социально-ориентированный национальный проект однозначно фиксирует
            необходимость кластеризации усилий. Вот вам яркий пример современных
            тенденций - разбавленное изрядной долей эмпатии, рациональное
            мышление напрямую зависит от благоприятных перспектив.
            Предварительные выводы неутешительны: синтетическое тестирование
            обеспечивает широкому кругу (специалистов) участие в формировании
            новых принципов формирования материально-технической и кадровой
            базы!
          </p>
        </Col>
        <Col>123</Col>
        </Row>
        <Row>
        <Col>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">второстепенный</Button>
          <Button variant="success">успех</Button>
          <Button variant="info">инфо</Button>
          <Button variant="warning">предупреждение</Button>
          <Button variant="danger">опасность</Button>
          <Button variant="focus">фокус</Button>
          <Button variant="alt">альтернатива</Button>
          <Button variant="light">светлый</Button>
          <Button variant="dark">тёмный</Button>
          <Button variant="link">ссылка</Button>
          <p>
            Учитывая ключевые сценарии поведения, курс на
            социально-ориентированный национальный проект однозначно фиксирует
            необходимость кластеризации усилий. Вот вам яркий пример современных
            тенденций - разбавленное изрядной долей эмпатии, рациональное
            мышление напрямую зависит от благоприятных перспектив.
            Предварительные выводы неутешительны: синтетическое тестирование
            обеспечивает широкому кругу (специалистов) участие в формировании
            новых принципов формирования материально-технической и кадровой
            базы!
          </p>
        </Col>
        
        
        </Row>
      </Container>
    </>
  );
};

export default App;
