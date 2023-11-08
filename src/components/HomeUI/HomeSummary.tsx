import './Summary.css';
import { Container, Row, Col } from 'react-bootstrap';
import people from '../../animation/rocket.json';
import Lottie from 'lottie-react';
import { Slide } from "react-awesome-reveal";

const HomeSummary = () => {
  return (
    <div className="about-inspire" style={{ backgroundColor: 'white' }}>
      <Container>
        <Row>
          <Col md={7} xs={12} className="text-container">
            <h1 className="inspire-heading">OUR MISSION...</h1>
            <p className="lorem-ipsum">
            At Chance Viz, our vision is to simplify the understanding of probabilities through captivating visuals, empowering individuals to make informed decisions and navigate life's uncertainties with confidence. We aim to provide a unique perspective that demystifies chance and enhances critical thinking.
            </p>
          </Col>
          <Col md={5} xs={12} className="image-container">
            <Slide direction='right'>
              <div className="blue-circle">
                <Lottie animationData={people} style={{ height: '120%' }} />
              </div>
            </Slide>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeSummary;