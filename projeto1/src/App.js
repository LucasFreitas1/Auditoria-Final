import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
//import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Apontamentos from './Pages/Apontamentos';
import Cadastro from './Pages/Cadastro';
import Trabalho from './Pages/Trabalho';
import Followup from './Pages/Followup';
import Arquivo from './Pages/Arquivo';
import Configuracoes from './Pages/Configuracoes';
import Logout from './Pages/Logout';
import NovoUsuario from './Pages/NovoUsuario';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand >Auditoria</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/apontamentos">Apontamentos</Nav.Link>
                <NavDropdown title="Cadastro" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/trabalho">Trabalho</NavDropdown.Item>
                  <NavDropdown.Item href="/cadastro">Apontamento</NavDropdown.Item>
                  <NavDropdown.Item href="/novousuario">Usuário</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/followup">Follow up</Nav.Link>
                <Nav.Link href="/arquivo">Arquivo</Nav.Link>
                <NavDropdown title="Configurações" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/configuracoes">Configuracoes</NavDropdown.Item>
                  <NavDropdown.Item href="/novousuario">Usuarios</NavDropdown.Item>
                </NavDropdown>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/*Lista de rotas para cada item da navbar*/}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/apontamentos" element={<Apontamentos />} />
            <Route path="/followup" element={<Followup />} />
            <Route path="/arquivo" element={<Arquivo />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/trabalho" element={<Trabalho />} />
            <Route path="/novousuario" element={<NovoUsuario />} />
          </Routes>
        </Router>

      </div>
    </>
  );
}

export default App;
