import React from 'react';
import {
	Container,
	Jumbotron,
	Button,
	Row,
	Col,
	Card,
	CardImg,
	CardTitle,
	CardText,
	CardColumns,
	CardSubtitle,
	CardBody,
	CardHeader,
	ListGroup,
	ListGroupItem 
	} from "reactstrap";

import kaching from "../../resources/kaching.mp3";



class HomePage extends React.Component {

constructor(props) {
    super(props);
    this.state = { play: true };
    this.audio = new Audio(kaching);
    this.togglePlay = this.togglePlay.bind(this);
  }

 togglePlay() {
    this.setState({ play: this.state.play });
    console.log(this.audio);
    this.state.play ? this.audio.play() : this.audio.pause();
  }
  render() {
    return  <div>
    <Container>
    <Row>
    <Col xs="12" sm="8">
      <Jumbotron className="border border-secondary">
        <h1 className="display-3">Ready to optimize?</h1>
        <p className="lead">This application focuses on saving your very valuable time. <br/>You may ask, how can you do that? <br/>Well my dear friend, tell us a bit about yourself, and we will tell you the best route where to keep your things in your University.</p>
        <CardImg src={require("../../resources/graph.png")}alt="Card image cap" />
        <hr className="my-2" />
        <p className="justify">A small taste of the application appearance. (experimental)<br/></p>
        <p className="lead">
        For starters, we are working with the University of Los Andes. <br/>In later iterations we will integrate information of new universities to help YOU out!
        </p>
        <div className="justify">
          <Button color="dark">Learn More</Button>
        </div>
        </Jumbotron>
        
      <ListGroup flush className="shadow p-3 bg-white rounded" >
        <ListGroupItem>Tell us where you study</ListGroupItem>
        <ListGroupItem>Where do you spend most of your time?</ListGroupItem>
        <ListGroupItem><Button  color="dark" onClick={this.togglePlay}>Kaa-ching!</Button> A small trial plan is produced</ListGroupItem>
        <ListGroupItem>Tell us where are your classrooms and...</ListGroupItem>
        <ListGroupItem>A new and more precise map will be made just for you!</ListGroupItem>
      </ListGroup>

      <hr className="my-6" />
      <p className="lead">
      Did you like our work? Don't hesitate on contacting us for suggestions and anything else!
      </p>
      
      </Col>
      <Col xs="12" sm="4">
      <Card body outline color="secondary" className="mb-1">
      <CardHeader className="justify mb-1"><h3>The Masterminds</h3></CardHeader>
        <CardImg src={require("../../resources/munera.jpg")} alt="Card image cap" />
        <hr className="my-2" />
        <CardBody >
          <CardTitle>Santiago Munera</CardTitle>
          <CardSubtitle className="mb-2">The algorithm master</CardSubtitle>
          <CardText id="muneradesc" className="shadow p-3 bg-white rounded">Gets a kick off working with new technologies and solving real-life problems. Also, he has a band and knows how to play many instruments.</CardText>
          <div className="justify">
          <Button color="dark" href="">Github</Button>
          </div>
        </CardBody>
      </Card>
      <Card body outline color="secondary" className="mb-2">
        <CardImg src={require("../../resources/ricardo.jpg")} alt="Card image cap" />
        <hr className="my-2" />
        <CardBody>
          <CardTitle>Ricardo Gonzalez</CardTitle>
          <CardSubtitle className="mb-1">The framework wiz</CardSubtitle>
          <CardText id="ricardodesc" className="shadow p-3 bg-white rounded">He is passionate developer who really loves reading nice code and learning new stuff everyday. He wants to become an example to newcomer programmers.</CardText>
          <div className="justify">
          <Button color="dark" className="mr-1"href="https://github.com/rgonzalezp">Github</Button>
          <Button color="dark" href="https://www.linkedin.com/in/ricardo-enrique-gonzalez-penuela-b6ab04155">Linkedin</Button>
          </div>
        </CardBody>
      </Card>
     
     
      </Col>
      </Row>
      </Container>
    </div>
  }
}
export default HomePage;