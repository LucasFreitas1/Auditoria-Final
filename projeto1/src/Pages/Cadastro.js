import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Container,Form} from 'react-bootstrap';

function Cadastro() {


  return (


    <div className='cadastro'>
     
       
          <h2>Cadastro de apontamentos</h2>
        
        
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        

     
    </div>

  );
}

export default Cadastro;