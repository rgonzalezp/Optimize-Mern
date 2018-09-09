import React, { Component } from "react";
import { Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

import HomePage from './components/home/HomePage';
import RegistrationForm from './components/auth/RegistrationForm';
import config from './configfile';
import LoginPage from './components/auth/LoginPage';
import ProfilePage from './components/auth/ProfilePage';
import PlansPage from './components/auth/PlansPage';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import './components/home/HomePage.css';
import './components/auth/PlansPage.css';
import './components/auth/LoginForm.css';
import './components/auth/RegistrationForm.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/login"
            render={() => <LoginPage baseUrl={config.url} />}
          />
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <Route path="/register" component={RegistrationForm} />
          <SecureRoute path="/profile" component={ProfilePage} />
          <SecureRoute path="/plans" component={PlansPage} />
        </main>

      </div>
    );
  }
}

export default App;
