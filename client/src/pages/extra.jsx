import React from 'react';
import {
  Table,
  Button,
  Row,
  Col,
  Input,
  Form
} from 'antd';
import { DOMAIN } from '../utils';

function Extra(props) {
  return(
    <>
      <h1 className="title">Extra</h1>
      <Row>
        <Col>
          <Button
            onClick={() => console.log("click")}
            type="primary">
            
            Submit
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Extra;