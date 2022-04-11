import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'

function Apontamentos() {
  return (
    <div className='apontamentos'>
      <Col>
        <h2>Listagem de apontamentos</h2>
        <Row>
          <br />
        </Row>
        <Row>

        </Row>
        <Row>
          <Form.Select aria-label="Default select example">
            <option>Trabalho</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Row>
      </Col>
    </div>
  );
}

export default Apontamentos;