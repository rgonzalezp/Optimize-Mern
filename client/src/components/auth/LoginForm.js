import React from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import {Container, 
  Col, 
  Form,
  FormGroup, 
  Label, 
  Input,
  FormText,
  Button
} from "reactstrap";

export default withAuth(
  class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sessionToken: null,
        error: null,
        username: '',
        password: ''
      };

      this.oktaAuth = new OktaAuth({ url: props.baseUrl });

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleSubmit(e) {
      e.preventDefault();
      this.oktaAuth
        .signIn({
          username: this.state.username,
          password: this.state.password
        })
        .then(res =>
          this.setState({
            sessionToken: res.sessionToken
          })
        )
        .catch(err => {
          this.setState({ error: err.message });
          console.log(err.statusCode + ' error', err);
        });
    }

    handleUsernameChange(e) {
      this.setState({ username: e.target.value });
    }

    handlePasswordChange(e) {
      this.setState({ password: e.target.value });
    }

    render() {
      if (this.state.sessionToken) {
        this.props.auth.redirect({ sessionToken: this.state.sessionToken });
        return null;
      }

      const errorMessage = this.state.error ? (
        <span className="error-message">{this.state.error}</span>
      ) : null;

      return (
      <Container className="App">
        <h2>Sign In</h2>
        <Form className="form" onSubmit={this.handleSubmit}>
          <Col>
            <FormGroup>
              <Label>Username</Label>
              <Input
                id="username"
                type="text"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
              <FormText>Your username is most likely your email.</FormText>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
    }
  }
);