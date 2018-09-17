import { withAuth } from '@okta/okta-react';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Plans from '../shared/Plans'
import PlanModal from '../shared/PlanModal'
import {Container} from 'reactstrap';
import {withScriptjs,withGoogleMap,GoogleMap,Marker} from "react-google-maps";


var goldStar = {
          path: 'M -2,0 0,-2 2,0 0,2 z',
          fillColor: 'white',
          fillOpacity: 0.8,
          scale: 15,
          strokeColor: 'dimgrey',
          strokeWeight: 3
        };

const MapWithAMarker = withScriptjs(withGoogleMap(props =>

  <GoogleMap
    defaultZoom={18}
    defaultCenter={{ lat: 4.602080893312928, lng: -74.0652644634247 }}
  >
    <Marker icon={goldStar}
      label={"ML"}
      position={{ lat: 4.60284018436808, lng: -74.06488895416261  }}
    />
    <Marker icon={goldStar}
      label={"Y"}
      position={{ lat: 4.602321513805402, lng: -74.06533420085908  }}
    />
    <Marker icon={goldStar}
      label={"LL"}
      position={{ lat: 4.602150405907995, lng: -74.06509816646577  }}
    />
    <Marker icon={goldStar}
      label={"W"}
      position={{ lat: 4.602091587558756, lng: -74.06498014926912  }}
    />
    <Marker icon={goldStar}
      label={"Z"}
      position={{ lat: 4.602407067738685, lng: -74.06556487083436  }}
    />
    <Marker icon={goldStar}
      label={"S1"}
      position={{ lat: 4.601824231364621, lng: -74.06416475772859  }}
    />
    <Marker icon={goldStar}
      label={"Rga"}
      position={{ lat: 4.601989992216827, lng: -74.06604230403902  }}
    />
    <Marker icon={goldStar}
      label={"Au"}
      position={{ lat: 4.602658382358213, lng: -74.06639635562898  }}
    />
    <Marker icon={goldStar}
      label={"K2"}
      position={{ lat: 4.601332295705055, lng: -74.06452417373659  }}
    />
    <Marker icon={goldStar}
      label={"R"}
      position={{ lat: 4.601621040589925, lng: -74.06386971473695  }}
    />
    <Marker icon={goldStar}
      label={"B"}
      position={{ lat: 4.60146062677946, lng: -74.06569898128511  }}
    />
    <Marker icon={goldStar}
      label={"C"}
      position={{ lat: 4.601139799050085, lng: -74.06492650508882  }}
    />
    <Marker icon={goldStar}
      label={"G"}
      position={{ lat: 4.601567569323786, lng: -74.0660208463669  }}
    />
    <Marker icon={goldStar}
      label={"SD"}
      position={{ lat: 4.604417582209825, lng: -74.06586527824403  }}
    />
    <Marker icon={goldStar}
      label={"Tx"}
      position={{ lat: 4.60111841052965, lng: -74.06370878219606  }}
    />
    <Marker icon={goldStar}
      label={"O"}
      position={{ lat: 4.600674598585696, lng: -74.06497478485109  }}
    />
    <Marker icon={goldStar}
      label={"Pu"}
      position={{ lat: 4.6012307002547574, lng: -74.06666457653047  }}
    />
    <Marker icon={goldStar}
      label={"M"}
      position={{ lat: 4.600695987119451, lng: -74.06617105007173  }}
    />
    <Marker icon={goldStar}
      label={"Q"}
      position={{ lat: 4.600230786365085, lng: -74.06518399715425  }}
    />
  </GoogleMap>
));


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


const drawerWidth = 240;

const styles = theme => ({

  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
});

class PlansPage extends React.Component {

  constructor(props) {
      super(props);
      this.state = { user: null, open: true};
      this.getCurrentUser = this.getCurrentUser.bind(this);
    }

    async getCurrentUser() {
      this.props.auth.getUser().then(user => this.setState({ user }));
    }

    componentDidMount() {
      this.getCurrentUser();
    }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    if (!this.state.user) return <MuiThemeProvider theme={themeColor}><CircularProgress className="centered" size={80} color="primary"></CircularProgress></MuiThemeProvider>;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
        <MuiThemeProvider theme={themeColor}>
          <AppBar color="primary"
            position="absolute"
            className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
          >
        
            <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.menuButtonHidden,
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap className={classes.title}>
                Welcome to your Plans, {this.state.user.name}!

              </Typography>
            </Toolbar>
          </AppBar>
          </MuiThemeProvider>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List><div>
    <ListItem button component="a" href="/">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Log out"  onClick={() => this.props.auth.logout()}/>
    </ListItem>
    <ListItem button component="a" href="/profile">
      <ListItemIcon>
        <ViewCompactIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <ListItem button component="a" href="/">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Favorites" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Something else" />
    </ListItem>
  </div></List>
            <Divider />
            <List>
            <Container>
            <PlanModal {...this.state}/>
            </Container>
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container>
            <MapWithAMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBT3yuFUUiTjKVE_8QHsTZD_Q11xKiMbto&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `600px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
            <Plans {...this.state}/>
            </Container>
            <Typography component="div" className={classes.chartContainer}>
              
            </Typography>
            <div className={classes.tableContainer}>
              
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

PlansPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withAuth(PlansPage));
