import React from 'react';
import Navigation from '../shared/Navigation';
import { withAuth } from '@okta/okta-react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Container,
  Row,
  Col} from 'reactstrap'

import {
  FacebookShareButton,
  TwitterShareButton} from 'react-share';

import {
  FacebookIcon,
  TwitterIcon} from 'react-share';


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

const styles = theme => ({
  card: {
    maxWidth: 1000,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: grey[800],
  },
});

  class ProfilePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = { user: null , expanded: false};
      this.getCurrentUser = this.getCurrentUser.bind(this);
    };
    async getCurrentUser() {
      this.props.auth.getUser().then(user => this.setState({ user }));
    };

    componentDidMount() {
      this.getCurrentUser();
    };


  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

    render() {
       const { classes } = this.props;
       let currentdate = new Date();
       let stringDate = currentdate.toString();
        const shareUrl = 'https://Fixthis@profilepage.js';
        const title = 'Optimize, the tool that helps you save time.';

      if (!this.state.user) return <MuiThemeProvider theme={themeColor}><CircularProgress className="centered" size={80} color="primary"></CircularProgress></MuiThemeProvider>;
      return (
        <section className="user-profile">
        <Navigation/>
        <Container>
        <Row>
        <Col xs="12" sm="3">
        </Col>
          <Col xs="12" sm="6">
        <Card className={classes.card}>
        <MuiThemeProvider theme={themeColor}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {this.state.user.family_name.charAt(0)}
            </Avatar>
          }
          title={this.state.user.name}
          subheader={stringDate}
        />
        </MuiThemeProvider>
        <CardMedia className={classes.media} image='/faceProfileEx.jpg' alt="Card image cap" />       
        <CardContent>
          <Typography component="p">
            Welcome to a demo of your profile page, for now the functionalities here are not implemented. Still, you can see how the information will be displayed and make suggestions on what you would like to see....
          </Typography>
        </CardContent>

        <CardActions className={classes.actions} disableActionSpacing>
          
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button">
            <FacebookIcon
              size={36}
              round />
          </FacebookShareButton>
       
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <TwitterIcon
              size={36}
              round />
              </TwitterShareButton>
              
              <Typography variant="caption" align="center">
            Share the app!
          </Typography>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <Typography paragraph variant="display1">
              More options:
            </Typography>
            <Typography paragraph>
              Email : {this.state.user.email}
            </Typography>
            <Typography paragraph>
              Your preferred language : English
            </Typography>
            <Typography paragraph>
              University: Los Andes
            </Typography>
            <Typography variant="caption">
              Make your suggestions on functionalities, account management options, privacy options and anything you think about!
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      </Col>
      <Col xs="12" sm="3">
      </Col>
      </Row>
      </Container>
        
        </section>
      );
    }
  }

ProfilePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withAuth(ProfilePage));