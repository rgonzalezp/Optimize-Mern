import React, {Component} from 'react';
import {Container,ListGroup,ListGroupItem,Button} from 'reactstrap';
import {connect} from 'react-redux';
import {getPlans, deletePlan} from '../../actions/planActions';
import PropTypes from 'prop-types';
import Map from './Map';
import {withGoogleMap,
     withScriptjs,
     GoogleMap,
     Marker } from 'react-google-maps';
import { compose, withProps } from 'recompose';

	let goldStar = {
		  path: 'M -2,0 0,-2 2,0 0,2 z',
          fillColor: 'white',
          fillOpacity: 0.8,
          scale: 15,
          strokeColor: 'dimgrey',
          strokeWeight: 3
        };

	const MapComponent = withScriptjs(withGoogleMap((props) =>
	 <GoogleMap
	  defaultZoom={18}
	  defaultCenter={{lat:parseFloat(props.latPos),lng:parseFloat(props.lngPos)}}
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
  		{<Marker position={{lat:parseFloat(props.latPos),lng:parseFloat(props.lngPos)}}/>}
 		</GoogleMap>
		))

class Plans extends Component {

	constructor(props) {
      super(props);   
     	this.state = {
			latPos : 4.60308936,
			lngPos : -74.06569088
 		}  
  	}

  componentDidMount() {
  	const getPlansWith = {
			email: this.props.user.email,
		}
    this.props.getPlans(getPlansWith);
  }

  onDeleteClick = (id) => {
  	this.props.deletePlan(id);
  }

  	delayedShowMarker = (id) => {
  		const { plans } = this.props.plan;
  		const blocks = ['SD','Au','ML','Z','Y','LL','W','Rga','S1','R','G','B',
  		'Pu','C','K2','Tx','O','M','Q'];
		let result = plans.find(obj => {
  		return obj._id === id
		});
		let res = result.content.split(";");
		let isSubset = res.every(val => blocks.includes(val));
		let x = 0;
		let y = 0;
		let count = 0;
		if(isSubset){
			if(res.includes('SD')){
				count++;
				x += -74.06586527824403;
				y += 4.604417582209825; 
			}	
			if(res.includes('Au')){
				count++;
				x += -74.06639635562898;
				y += 4.602658382358213;
			}
			if(res.includes('ML')){
				count++;
				x += -74.06488895416261;
				y += 4.60284018436808;
			}
			if(res.includes('Z')){
				count++;
				x += -74.06556487083436;
				y += 4.602407067738685;
			}
			if(res.includes('Y')){
				count++;
				x += -74.06533420085908;
				y += 4.602321513805402;
			}
			if(res.includes('LL')){
				count++;
				x += -74.06509816646577;
				y += 4.602150405907995;
			}
			if(res.includes('W')){
				count++;
				x += -74.06498014926912;
				y += 4.602091587558756;
			}
			if(res.includes('Rga')){
				count++;
				x += -74.06604230403902;
				y += 4.601989992216827;
			}
			if(res.includes('S1')){
				count++;
				x += -74.06416475772859;
				y += 4.601824231364621;
			}
			if(res.includes('R')){
				count++;
				x += -74.06386971473695;
				y += 4.601621040589925;
			}
			if(res.includes('G')){
				count++;
				x += -74.0660208463669;
				y += 4.601567569323786;
			}
			if(res.includes('B')){
				count++;
				x += -74.06569898128511;
				y += 4.60146062677946;			
			}
			if(res.includes('Pu')){
				count++;
				x += -74.06666457653047;
				y += 4.6012307002547574;
			}
			if(res.includes('C')){
				count++;
				x += -74.06492650508882;
				y += 4.601139799050085;
			}
			if(res.includes('K2')){
				count++;
				x += -74.06452417373659;
				y += 4.601332295705055;
			}
			if(res.includes('Tx')){
				count++;
				x += -74.06370878219606;
				y += 4.60111841052965;
			}
			if(res.includes('O')){
				count++;
				x += -74.06497478485109;
				y += 4.600674598585696;
			}
			if(res.includes('M')){
				count++;
				x += -74.06617105007173;
				y += 4.600695987119451;
			}
			if(res.includes('Q')){
				count++;
				x += -74.06518399715425;
				y += 4.600230786365085;
			}
			x = x/count;
			y = y/count;
		}
		else{
			alert('Be sure to type the correct place (Plans are upper and lower case sensitive!)');
		}
 		this.setState({ latPos: y, lngPos: x})
	}

  render() {
	const { plans } = this.props.plan;

	return (
		<Container>
		<MapComponent
      	latPos={this.state.latPos}
      	lngPos={this.state.lngPos}
      	googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBT3yuFUUiTjKVE_8QHsTZD_Q11xKiMbto&v=3.exp&libraries=geometry,drawing,places"
      	loadingElement={<div style={{ height: `100%` }} />}
      	containerElement={<div style={{ height: `700px` }} />}
      	mapElement={<div style={{ height: `100%` }} />}
    	/>
        <ListGroup>
		{plans.map(({_id,content})=>(
			<ListGroupItem>
			<Button className="remove-btn"
			color="danger"
			size="md"
			onClick={this.onDeleteClick.bind(this,_id)}>
			Remove
			</Button>
			<Button className="remove-btn"
			color="info"
			size="md"
			onClick={this.delayedShowMarker.bind(this,_id)}>
			Apply
			</Button>
			<div>
			</div>
			{content}
			</ListGroupItem>
			))}
		</ListGroup>
		</Container>
		);
}

}

Plans.propTypes = {
	getPlans: PropTypes.func.isRequired,
	plan: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  plan: state.plan
});
export default connect(mapStateToProps, {getPlans,deletePlan})(Plans);