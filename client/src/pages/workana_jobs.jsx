import React, {useState} from 'react';
import {
  Table,
  Button,
  Row,
  Col,
  Input,
  Form, Checkbox
} from 'antd';
import axios from 'axios';

import workana_jobs_columns from '../table_columnas/workana_jobs';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function WorkanaJobs(props) {
  const [workana_jobs, setWorkanaJobs] = useState([])
  

  const onBtnScrape = () => {
    console.log("onBtnScrape")
    const url_request = `http://localhost:4000/workana/scrape`;
    axios.get(url_request)
      .then(response => {
        const { workana_jobs } = response.data;
        console.log(workana_jobs)
        setWorkanaJobs( workana_jobs )
      })
  }

  const onInputChange = (text) => {
    console.log(text)
  }

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return(
    <>
      <h1 className="title">Workana</h1>
      <Row>
        <Col>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          {/* <Input
            addonBefore="https://"
            addonAfter=".com"
            defaultValue="workana"
            onChange={onInputChange}
            />
          <Button
            type="primary"
            onClick={onBtnScrape}
            >
            Scrape
          </Button> */}

        </Col>
      </Row>
      {/* <Row>
        <Col> */}
          <Table dataSource={workana_jobs} columns={workana_jobs_columns} />
        {/* </Col>
      </Row> */}
    </>
  )
}

export default WorkanaJobs;