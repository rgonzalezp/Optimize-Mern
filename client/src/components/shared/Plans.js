import React, {Component} from 'react';
import {Container,ListGroup,ListGroupItem,Button} from 'reactstrap';
import {connect} from 'react-redux';
import {getPlans, deletePlan, addPlan} from '../../actions/planActions';
import PropTypes from 'prop-types';
class Plans extends Component {

  componentDidMount() {
    this.props.getPlans();
  }

  onDeleteClick = (id) => {
  	this.props.deletePlan(id);
  }
  render() {
	const { plans } = this.props.plan;
	return (
		<Container>
        <ListGroup>
		{plans.map(({_id,content})=>(
			<ListGroupItem>
			<Button className="remove-btn"
			color="danger"
			size="sm"
			onClick={this.onDeleteClick.bind(this,_id)}>
			</Button>
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