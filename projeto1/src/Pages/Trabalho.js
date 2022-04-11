import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Form, Button, Table } from 'react-bootstrap';
import Axios from 'axios';
import RefreshIcon from '@mui/icons-material/Refresh';

function Trabalho() {

  const [tipoTrabalho, setTipo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [nomeTrabalho, setNome] = useState("");
  const [mesTrabalho, setMes] = useState(0);
  const [anoTrabalho, setAno] = useState(0);
  const [listaTrabalhos, setListaTrabalhos] = useState([])

  const novoTrabalho = () => {
    Axios.post('http://localhost:3001/criaTrabalho', {
      tipoTrabalho: tipoTrabalho,
      empresa: empresa,
      nomeTrabalho: nomeTrabalho,
      mesTrabalho: mesTrabalho,
      anoTrabalho: anoTrabalho,
    }).then(() => {
      console.log("Ok");
      alert("Cadastro feito!");
    })
  };

  const getTrabalhos = () => {
    Axios.get('http://localhost:3001/getTrabalhos').then((response) => {
      setListaTrabalhos(response.data);
    })
  };



  return (


    <div className='cadastro'>
      <Container>
        <Row>
          {/*Primeira coluna onde dados para cadastrar irão*/}
          <Col md="4">
            <Form.Group>
              {/* Primeira linha com título */}
              <Row>
                <h3>Cadastro de trabalhos</h3>
              </Row>
              {/* Segunda linha com duas colunas para tipo de trabalho e empresa */}
              <Row className='selectForm'>
                <Col>

                  <Form.Label>Tipo de trabalho</Form.Label>
                  <Form.Select size="sm" type="text"
                    onChange={(event) => {
                      setTipo(event.target.value);
                    }}>
                    <option> </option>
                    <option value="Plano de Auditoria">Planejado</option>
                    <option value="Diretoria">Diretoria</option>
                    <option value="Projeto">Projeto</option>
                    <option value="CCI">CCI</option>
                    <option value="Adicional">Adicional</option>
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
              {/* Terceira linha  com nome do trabalho*/}
              <Row className='selectForm'>
                <Col>
                  <Form.Label>Nome Trabalho</Form.Label>
                  <Form.Control size="sm" type="text" placeholder="Digite o nome"
                    onChange={(event) => {
                      setNome(event.target.value);
                    }}
                  />
                  <Form.Text className="text-muted">
                    O nome do trabalho executado (Ex: Inventário, Análise de Caixa, Avaliação de Vendas)
                  </Form.Text>
                </Col>
              </Row>
              {/* Quarta linha com Mês e Ano de início do trabalho*/}
              <Row className='selectForm'>
                <Form.Label>Mês e ano de início do trabalho</Form.Label>
                <Col>
                  <Form.Select size="sm" type="number"
                    onChange={(event) => {
                      setMes(event.target.value);
                    }}
                  >
                    <option> </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </Form.Select>
                  <Form.Text className="text-muted">
                    Mês
                  </Form.Text>
                </Col>
                <Col>
                  <Form.Select size="sm" type="number"
                    onChange={(event) => {
                      setAno(event.target.value);
                    }}
                  >
                    <option> </option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </Form.Select>
                  <Form.Text className="text-muted">
                    Ano
                  </Form.Text>
                </Col>
              </Row>
              {/* Quinta linha com Botão de enviar*/}
              <Row>
                <Col>
                  <br />
                  <Button type="submit" value="Submit" onClick={novoTrabalho} variant="success">Enviar</Button>
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
              <h3>Lista de trabalhos</h3>
            </Row>
            <Row className="botaoExibir" >
              <Button onClick={getTrabalhos}>
                Carregar<RefreshIcon />
              </Button>
            </Row>
            <Row>
              <br />
            </Row>
            {/*Tabela apresentando listagem de trabalhos  */}
            <Row className="tabela">
              <Table size="sm" striped bordered hover >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Empresa</th>
                    <th>Trabalho</th>
                    <th>Tipo</th>
                    <th>Ano</th>
                  </tr>
                </thead>
                <tbody>
                  {listaTrabalhos.map((val, key) => {
                    return (
                      <tr>
                        <td>{val.id}</td>
                        <td>{val.empresa}</td>
                        <td>{val.nomeTrabalho}</td>
                        <td>{val.tipoTrabalho}</td>
                        <td>{val.anoTrabalho}</td>
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

export default Trabalho;