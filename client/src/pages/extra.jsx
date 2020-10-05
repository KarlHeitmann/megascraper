import React, {useState} from 'react';
import {
  Table,
  Button,
  Row,
  Col,
  Input,
  Form
} from 'antd';
import axios from 'axios';
import infosubvenciones_columns from '../table_columnas/infosubvenciones';
import { DOMAIN } from '../utils';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function Extra(props) {
  const [infosubvenciones, setInfosubvenciones] = useState([])

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  async function onBtnScrape(values) {
    console.log("click")
    // const url_request = `${DOMAIN}/scrapers/workana${pages ? "?pages=" + pages : "" }`;
    const { pages } = values
    const url_request = `${DOMAIN}/scrapers/extra${pages ? "?pages=" + pages : "" }`;
    axios.get(url_request)
      .then(response => {
        const { rows } = response.data
        console.log(rows)
        setInfosubvenciones(rows)
      })
  }
  return(
    <>
      <h1 className="title">Extra</h1>
      <Row>
        <Col>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onBtnScrape}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Pages to scrap"
              name="pages"
              // rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row>
        <Table
          dataSource={infosubvenciones}
          columns={infosubvenciones_columns}
          />
      </Row>
    </>
  );
};

export default Extra;