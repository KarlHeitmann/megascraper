import React from 'react';
import {
  Table,
  Button,
  Row,
  Col,
  Input,
  Form
} from 'antd';
import axios from 'axios';
import { DOMAIN } from '../utils';

function Extra(props) {

  async function onClickScrape() {
    console.log("click")
    // const url_request = `${DOMAIN}/scrapers/workana${pages ? "?pages=" + pages : "" }`;
    const url_request = `${DOMAIN}/scrapers/extra`;
    axios.get(url_request)
      .then(response => {
        console.log(response.data)
      })
  }
  return(
    <>
      <h1 className="title">Extra</h1>
      <Row>
        <Col>
          <Button
            onClick={onClickScrape}
            type="primary">
            
            Submit
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Extra;