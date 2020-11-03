import React from 'react';
import {
  Row,
  Col,
  Form,
  Input,
  Button,
} from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function Autos(props) {
  const onBtnScrape = (values) => {
  }
  const onFinishFailed = errorInfo => {
  }
  return(
    <>
      <h1>Autos</h1>
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
    </>
  );
};

export default Autos;