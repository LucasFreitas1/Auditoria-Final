import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Form, Button, Table } from 'react-bootstrap';
import '../App.css';
import Axios from 'axios';

function Login() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const [loginStatus, setLoginStatus] = useState('')


  const login = () => {
    Axios.post('http://localhost:3001/login', {
      email: email,
      senha: senha,
    }).then((response) => {

      if (response.data.message) {
        setLoginStatus(response.data.message)
      } else {
        setLoginStatus("")
      }
      console.log(response.data);
    });
  };


  return (

    <div className="login">
      {/*Container para colunas*/}
      <Container>
        <Row >
          {/*Primeira coluna*/}
          <Col md={4}>
          </Col>
          <Col md={4} >
            <Row >
              <h2>Auditoria</h2>
            </Row>
            <Row className='selectForm'>
              <Form.Control type="text" placeholder="E-mail"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></Form.Control>
            </Row>
            <Row className='selectForm'>
              <Form.Control type="password" placeholder="Senha"
                onChange={(e) => {
                  setSenha(e.target.value);
                }}
              ></Form.Control>
            </Row>
            <br />
            <Row>
              <Col>
                <Button type="submit" className='buttonLogin'
                  onClick={login}
                >Login</Button>
              </Col>
              <Col>
                <Button type="submit" variant='danger' className='buttonLogin'>Esqueci a senha</Button>
              </Col>
            </Row>
            <Row>
              <Col>
              <br/>
                {loginStatus}
              </Col>
            </Row>

          </Col>
          <Col md={4}>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default Login;