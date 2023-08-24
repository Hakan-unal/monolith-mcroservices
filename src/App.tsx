import { Row, Typography, Col, Image, Switch } from 'antd';
import { title1, title2, title3, title4, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6, paragraph7, paragraph8, paragraph9 } from "./language/language"
import { useState } from 'react';

const { Title, Paragraph, Text, Link } = Typography;


const App = () => {
  const [translate, setTranslate] = useState<boolean>(false)
  const blockContent = "test ajkshd jkash jkashd jkashdjk ahsdjk ashd kjas "

  return (<Row justify={"center"}>
    <Col sm={24}>
      <Switch unCheckedChildren={<div>TR</div>} checkedChildren={<div>EN</div>} onChange={(checked) => setTranslate(checked)} />
    </Col>

    <Col sm={24}>

      <Title level={1}>{title1(translate)}</Title>

      <Paragraph >
        {paragraph1(translate)}
      </Paragraph>

    </Col>
    <Col sm={8}>
      <Image width={"80%"} src='https://media.licdn.com/dms/image/D4D22AQG_QVJz1Dh42Q/feedshare-shrink_800/0/1692775243181?e=1695859200&v=beta&t=_GQ6FrtZ0WJSAZa3vuZf5NFOS1Bb9M_5EF3_QRBQEB4' />
    </Col>
    <Col sm={16}>
      <Title level={2}>{title2(translate)}</Title>
      <Paragraph>
        {paragraph2(translate)}
      </Paragraph>
    </Col>

    <Col sm={24}>
      <Title level={3}>{title3(translate)}</Title>
      <Paragraph>
        <ul>
          <li>
            {paragraph3(translate)}
          </li>
          <li>
            {paragraph4(translate)}
          </li>
          <li>
            {paragraph5(translate)}
          </li>
          <li>
            {paragraph6(translate)}
          </li>
        </ul>
      </Paragraph>
    </Col>

    <Col xs={16} sm={12}>
      <Image width={"100%"} src='http://mustafabas.me/Images/Uploads/microservices-and-monolithic-architecturesjpg_size.jpg' />
    </Col>

    <Col sm={24}>
      <Title level={3}>{title4(translate)}</Title>
      <Paragraph>
        <ul>
          <li>
            {paragraph7(translate)}
          </li>
          <li>
            {paragraph8(translate)}
          </li>
          <li>
            {paragraph9(translate)}
          </li>
        </ul>
      </Paragraph>
    </Col>

  </Row>
  )
}


export default App;