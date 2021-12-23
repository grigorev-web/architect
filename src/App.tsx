import { FC } from "react";
import Container from "./UI/layout/Container";

import Button from "./UI/elements/Button/";
import Card from "./UI/layout/Card";
const App: FC = () => {
  return (
    <>
      <Container>
        <Card>
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
        </Card>
        <Card>
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
        </Card>
        <Card>123</Card>
      </Container>
    </>
  );
};

export default App;
