import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <section className="homeSection">
        <Container>
          <Row>
            <Col className="column1 w3-animate-left">
              <div className="textDiv">
                <p>We Are</p>
                <h1>
                  Builders with a<br /> Different Approach
                </h1>
                <Button href="/register" className="buttonHome btn-lg">
                  Register now <i className="fas fa-users" />
                </Button>
              </div>
            </Col>
            <Col xs={5} className="column2" />
          </Row>
        </Container>
        <div className="paspartu-top" />
        <div className="paspartu-right" />
        <div className="paspartu-bottom" />
        <div className="paspartu-left" />
      </section>
    );
  }
}

export default Home;
