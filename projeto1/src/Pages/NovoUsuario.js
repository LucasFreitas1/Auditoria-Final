import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Form, Button, Table } from 'react-bootstrap';
import '../App.css';
import Axios from 'axios';
import RefreshIcon from '@mui/icons-material/Refresh';

function NovoUsuario() {


  const [tipo_usuario, setTipo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [senha, setSenha] = useState("");
  const [listaUsuarios, setListaUsuarios] = useState([])


  const novoUsuario = () => {
    Axios.post('http://localhost:3001/criaUsuario', {
      tipo_usuario: tipo_usuario,
      empresa: empresa,
      nome: nome,
      area: area,
      email: email,
      senha: senha,
    }).then(() => {
      console.log("Ok");
      alert("Cadastro feito!");

    })
  };


  const getUsuarios = () => {
    Axios.get('http://localhost:3001/getUsuarios').then((response) => {
      setListaUsuarios(response.data);
    })
  };

  /*Fim formulas trabalhos*/

  return (
    <div className='cadastro'>
      <Container>
        <Row>
          {/*Primeira coluna onde dados para cadastrar irão*/}
          <Col md="4">
            <Form.Group>
              {/* Primeira linha com título */}
              <Row>
                <h3>Cadastro de usuários</h3>
              </Row>
              {/* Segunda linha com duas colunas para tipo de usuário e empresa */}
              <Row className='selectForm'>
                <Col>
                  <Form.Label>Tipo de usuário</Form.Label>
                  <Form.Select size="sm" type="text"
                    onChange={(event) => {
                      setTipo(event.target.value);
                    }}>
                    <option> </option>
                    <option value="Auditado">Auditado</option>
                    <option value="Auditor">Auditor</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Label>Empresa</Form.Label>
                  <Form.Select size="sm" type="text"
                    onChange={(event) => {
                      setEmpresa(event.target.value);
                    }}
                  >
                    <option> </option>
                    <option value="Brasal Participações">Brasal Participações</option>
                    <option value="Brasal Incorporações">Brasal Incorporações</option>
                    <option value="Brasal Refrigerantes">Brasal Refrigerantes</option>
                    <option value="Brasal Veículos">Brasal Veículos</option>
                    <option value="Brasal Combustíveis">Brasal Combustíveis</option>
                    <option value="Brasal Energia">Brasal Energia</option>
                    <option value="Brasal Hotel">Brasal Hotel</option>
                    <option value="Brasal Corretora">Brasal Corretora</option>
                    <option value="Fazendas Brasal">Fazendas Brasal</option>
                    <option value="Instituto Brasal">Instituto Brasal</option>
                    <option value="Outra">Outra</option>
                  </Form.Select>
                </Col>
              </Row>
              {/* Terceira linha com nome e sobrenome do usuário*/}
              <Row className='selectForm'>
                <Col>
                  <Form.Label>Nome</Form.Label>
                  <Form.Control size="sm" type="text" placeholder="Digite o nome"
                    onChange={(event) => {
                      setNome(event.target.value);
                    }}
                  />
                  <Form.Text className="text-muted">
                    Nome e sobrenome do usuário
                  </Form.Text>
                </Col>
              </Row>
              {/* Quarta e-mail*/}
              <Row className='selectForm'>
                <Col>
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control size="sm" type="text" placeholder="Digite o nome"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </Col>
              </Row>
              {/* Quinta linha com área*/}
              <Row className='selectForm'>
                <Col>
                  <Form.Label>Área</Form.Label>
                  <Form.Control size="sm" type="text" placeholder="Digite o nome"
                    onChange={(event) => {
                      setArea(event.target.value);
                    }}
                  />
                </Col>
                <Col>
                  <Form.Label>Senha</Form.Label>
                  <Form.Control size="sm" type="password" placeholder="Senha"
                    onChange={(event) => {
                      setArea(event.target.value);
                    }}
                  />
                </Col>
              </Row>
              {/* Sexta linha com Botão de enviar*/}
              <Row>
                <Col>
                  <br />
                  <Button type="submit" value="Submit" onClick={novoUsuario} variant="success">Enviar</Button>
                </Col>
                <Col>
                  {/*área vazia para botão ocupar espaço menor ou para incluir um segundo botão*/}
                </Col>
              </Row>
            </Form.Group>
          </Col>

          {/*Segunda coluna para apresentação de lista de trabalhos*/}

          <Col md="8">
            {/*Primeira linha com título da listagem de trabalhos*/}
            <Row>
              <h3>Lista de usuários</h3>
            </Row>
            <Row className="botaoExibir" >
              <Button size="sm" onClick={getUsuarios}>
                Carregar<RefreshIcon />
              </Button>
            </Row>
            <Row>
              <br />
            </Row>
            {/*Tabela apresentando listagem de usuarios  */}
            <Row className="tabela">
              <Table size="sm" striped bordered hover >
                <thead>
                  <tr>
                    <th>E-mail</th>
                    <th>Nome</th>
                    <th>Área</th>
                    <th>Empresa</th>
                    <th>Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  {listaUsuarios.map((val, key) => {
                    return (
                      <tr>
                        <td>{val.email}</td>
                        <td>{val.nome}</td>
                        <td>{val.area}</td>
                        <td>{val.empresa}</td>
                        <td>{val.tipo_usuario}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </Row>
          </Col>
        </Row>
      </Container>

    </div >
  );
}

export default NovoUsuario;