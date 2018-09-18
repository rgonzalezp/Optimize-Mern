import React, {Component} from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Label,
	Input,
	Container,
  ListGroup,
  ListGroupItem,
	Row,
	Col
	} from 'reactstrap';
import {connect} from 'react-redux';
import {addPlan} from '../../actions/planActions';
import {getBlocks} from '../../actions/blockActions';
import PropTypes from 'prop-types';

class PlanModal extends Component {
	constructor(props) {
      super(props);
      
  }
	state = {
		modal:false,
		q:'default',
	};

	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	}

	onChange = e => {
		this.setState({[e.target.name]:e.target.value});
	}

	onSubmit = e => {
		e.preventDefault();

		const newPlan = {
			email: this.props.user.email,
			content: this.state.content
		}

		//add item via addItem action
		this.props.addPlan(newPlan);

		this.toggle();
	}

   /*componentDidUpdate() {

    const getBlocksWith = {
      email: this.props.user.email,
    }
      this.props.getBlocks();
      console.log(this.props.getBlocks());
    }*/

	render() {
		return (
			<div>
			<Button color="dark" style={{marginBottom: '2rem'}} onClick={this.toggle}>Add plan</Button>
			<Modal isOpen={this.state.modal}
			toggle={this.toggle}>
			<ModalHeader toggle={this.toggle}>Add to your plans</ModalHeader>
			<ModalBody>
			<Form onSubmit={this.onSubmit}>
			<FormGroup>
			<Label for="plan"> Type your favorite places separated with a semicolon e.g: ML;SD;Au </Label>
			<Input type="text"
			name="content"
			id="content"
			placeholder="{Add your favorite places}"
			onChange={this.onChange}/>
			<Button color= "dark"
			style={{marginTop:'2rem'}}
			block>Submit places</Button>
			</FormGroup>
			</Form>
			</ModalBody>
			</Modal>
			</div>
			);
	}
}

PlanModal.propTypes = {
  plan: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
	plan: state.plan,
});
export default connect(mapStateToProps, {addPlan})(PlanModal);