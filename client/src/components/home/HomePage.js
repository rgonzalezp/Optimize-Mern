import React from 'react';
import {
	Container,
	Jumbotron,
	Button,
	Row,
	Col,Card, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody 
	} from "reactstrap";



export default class HomePage extends React.Component {
  render() {
    return  <div>
    <Container>
    <Row>
    <Col xs="8">
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        
        <div className="justify">
          <Button color="primary">Learn More</Button>
        </div>
        
      </Jumbotron>
      </Col>
      <Col xs="4">
      
      <Card>
        <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle className="mb-2">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <div className="justify">
          <Button>Button</Button>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle className="mb-2">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <div className="justify">
          <Button>Button</Button>
          </div>
        </CardBody>
      </Card>
     
     
      </Col>
      </Row>
      </Container>
    </div>
  }
}