import React, {useState} from 'react';
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Table,
} from 'antd';

import axios from 'axios';

import workana_jobs_columns from '../table_columnas/workana_jobs';
import { DOMAIN } from '../utils';
import autos_columns from '../table_columnas/autos';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function Autos(props) {
  // const [workana_jobs, setWorkanaJobs] = useState([])
  const [autos, setAutos] = useState([])

  const onBtnScrape = (values) => {
    console.log("onBtnScrape");
    console.log(values);
    const { pages } = values
    const url_request = `${DOMAIN}/scrapers/autos${pages ? "?pages=" + pages : "" }`;
    axios.get(url_request)
      .then(response => {
        const autos = response.data;
        console.log(autos)
        setAutos(autos)
        // const { workana_jobs } = response.data;
        // console.log(workana_jobs)
        // setWorkanaJobs( workana_jobs )
      })
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
      <Table dataSource={autos} columns={autos_columns}/>
    </>
  );
};

export default Autos;