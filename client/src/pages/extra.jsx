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

function Extra(props) {
  const [infosubvenciones, setInfosubvenciones] = useState([])

  async function onClickScrape() {
    console.log("click")
    // const url_request = `${DOMAIN}/scrapers/workana${pages ? "?pages=" + pages : "" }`;
    const url_request = `${DOMAIN}/scrapers/extra`;
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
          <Button
            onClick={onClickScrape}
            type="primary">
            
            Submit
          </Button>
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