import React from 'react';
import Navigation from '../shared/Navigation';
import { withAuth } from '@okta/okta-react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const themeColor = createMuiTheme({
  palette: {
    primary: {
      main: '#424242',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    }
  }
});

  class ProfilePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = { user: null };
      this.getCurrentUser = this.getCurrentUser.bind(this);
    }

    async getCurrentUser() {
      this.props.auth.getUser().then(user => this.setState({ user }));
    }

    componentDidMount() {
      this.getCurrentUser();
    }

    render() {
      if (!this.state.user) return <MuiThemeProvider theme={themeColor}><CircularProgress className="centered" size={80} color="primary"></CircularProgress></MuiThemeProvider>;
      return (
        <section className="user-profile">
        <Navigation/>
          <h1>User Profile</h1>
          <div>
            <label>Name:</label>
            <span>{this.state.user.name}</span>
          </div>
        </section>
      );
    }
  }

export default withAuth(ProfilePage);