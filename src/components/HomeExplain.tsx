import { Container, Row, Col, Card } from 'react-bootstrap';
import Lottie from 'lottie-react';
import GTR from '../animation/viz.json';
import Cogs from '../animation/improb.json';
import Review from '../animation/persp.json';
import './Explain.css'

const AnimateSection = () => {
  return (
    <div style={{ height: '100vh', background: '#0b5ed7' }} id="animateSection" className='animateMain' >
      <Container className="h-100 d-flex flex-column justify-content-center holder">
        <h1 className="expect text-center mb-5 mt-5 text-white">What You Can Expect...</h1>
        <Row xs={1} sm={1} md={3} className="g-4">
          {/* Card 1 */}
          <Col>
            <Card
              className="h-75 text-black text-center cardi"
              style={{ backgroundColor: 'white', cursor: 'pointer' }}
            >
              <Lottie animationData={GTR} style={{ height: '50%' }} />
              <Card.Body className="d-flex flex-column justify-content-center align-items-center"> {/* Use Bootstrap classes for vertical centering */}
                <Card.Title className='ct mb-4' >Visualization</Card.Title>
                <Card.Text className='tis'>
                Understanding the visualizations will empower you to see the vast difference between common occurrences and rare events, enabling you to make informed decisions and avoid unrealistic expectations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col>
            <Card
              className="h-75 text-black text-center cardi"
              style={{ backgroundColor: 'white', cursor: 'pointer' }}
            >
              <Lottie animationData={Cogs} style={{ height: '50%' }} />
              <Card.Body className="d-flex flex-column justify-content-center align-items-center"> {/* Use Bootstrap classes for vertical centering */}
                <Card.Title className='ct mb-4'>See Improbability</Card.Title>
                <Card.Text className='tis'>
                Dive into a world of relatable comparisons, where we use everyday scenarios and objects to illustrate the rarity of your odds, giving you a tangible sense of just how improbable certain outcomes can be.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col>
            <Card
              className="h-75 text-black text-center cardi"
              style={{ backgroundColor: 'white', cursor: 'pointer' }}
            >
              <Lottie animationData={Review} style={{ height: '50%' }} />
              <Card.Body className="d-flex flex-column justify-content-center align-items-center"> {/* Use Bootstrap classes for vertical centering */}
                <Card.Title className='ct mb-4'>Perspective</Card.Title>
                <Card.Text className='tis'>
                Acquiring the ability to differentiate between realistic possibilities and highly improbable occurrences will not only bolster your decision-making but also contribute to a more informed and critical mindset in various aspects of life.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AnimateSection;