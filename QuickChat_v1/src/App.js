import logo from './logo.svg';
import './App.css';
import {Navbar, NavDropdown, Nav, MenueItem} from 'react-bootstrap';

function App() {
  return (
    <div>
				<Navbar collapseOnSelect expand="lg" className="top-nav">
          <div className="container">
          <Navbar.Brand href="#home">Quick Chat</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="menu-list">
            <Nav >
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Login">Login</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          </div>
        </Navbar>
			</div>
  );
}

export default App;
