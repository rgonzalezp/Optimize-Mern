import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(
  class Navigation extends React.Component {
    constructor(props) {
      super(props);
      this.state = { authenticated: null };
      this.checkAuthentication = this.checkAuthentication.bind(this);
      this.checkAuthentication();
    }

    state = {
      isOpen: false
    }

    toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    async checkAuthentication() {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    }

    componentDidUpdate() {
      this.checkAuthentication();
    }

    render() {
      if (this.state.authenticated === null) return null;
      const authNav = this.state.authenticated ? (

        <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/"> Optimize </NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <NavItem className="auth-nav">
                  <NavLink href="/"
              onClick={() => this.props.auth.logout()}>
              Logout
              </NavLink>
                </NavItem>
                <NavItem className="auth-nav">
                <NavLink href="/profile">
                Profile
                </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
      ) : (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/"> Optimize </NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="auth-nav">
                  <NavLink href="javascript:void(0)"
              onClick={() => this.props.auth.login()}>
              Login
              </NavLink>
                </NavItem>
                <NavItem className="auth-nav">
                <NavLink href="/register">
                Register
                </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
      );
      return (
        <div>
            {authNav}      
        </div>
      );
    }
  }
);