import Button from "../../elements/Button"
import Col from "../../layout/Col"
import Container from "../../layout/Container"
import Row from "../../layout/Row"



export const Dashboard2 = ()=>{
    return  <Container>
        
    <Row>
    <Col>
        <h2>Dashboard 2</h2>
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
    
  </Container>
}