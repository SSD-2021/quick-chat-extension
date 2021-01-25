import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Login from "./Login/Login";
import {Navbar, NavDropdown, Nav, MenueItem} from 'react-bootstrap';

 class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          isModalOpen: false,
        };
      }

      openModal = () => {
        this.setState({ isModalOpen: true });
      };

      closeModal = () => {
        this.setState({ isModalOpen: false });
      };
      render(){
            return (
              <div>
                <Navbar collapseOnSelect expand="lg" className="top-nav">
                  <div className="container">
                    <Navbar.Brand href="#home">Quick Chat</Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="menu-list">
                          <Nav >
                            <Nav.Link href="#About">About</Nav.Link>
                            <Nav.Link onClick = {this.openModal}>Login</Nav.Link>
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
                <div>
                  <Login isOpen={this.state.isModalOpen} close={this.closeModal} />   
                </div>       
              </div>
            );
      }
}

export default App;
