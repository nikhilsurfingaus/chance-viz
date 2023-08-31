import { Container, Row, Col, Card } from 'react-bootstrap';
// import Lottie from 'lottie-react';
// import GTR from '../assets/animation/skyline.json';
// import Cogs from '../assets/animation/build.json';
// import Review from '../assets/animation/review.json';
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
              className="h-75 text-black text-center"
              style={{ backgroundColor: 'white', cursor: 'pointer' }}
            >
              {/* <Lottie animationData={} style={{ height: '50%' }} /> */}
              <Card.Body className="d-flex flex-column justify-content-center align-items-center"> {/* Use Bootstrap classes for vertical centering */}
                <Card.Title className='ct mb-4' >R34 Skyline History</Card.Title>
                <Card.Text className='tis'>
                  Experience the captivating allure of the legendary R34 GTR Skyline through stunning visuals and compelling storytelling on our website. Immerse yourself in a riveting journey that showcases the essence of the R34 GTR, leaving you mesmerized by its timeless charm.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col>
            <Card
              className="h-75 text-black text-center"
              style={{ backgroundColor: 'white', cursor: 'pointer' }}
            >
              {/* <Lottie animationData={Cogs} style={{ height: '50%' }} /> */}
              <Card.Body className="d-flex flex-column justify-content-center align-items-center"> {/* Use Bootstrap classes for vertical centering */}
                <Card.Title className='ct mb-4'>Showcase Modifications</Card.Title>
                <Card.Text className='tis'>
                  Dive into a diverse gallery of R34 GTR Skyline mods, curated from passionate owners worldwide, and witness the brilliance of customizations that elevate the iconic car to new heights. Our website celebrates the creativity and individuality of each owner, presenting a vibrant tapestry of automotive artistry.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col>
            <Card
              className="h-75 text-black text-center"
              style={{ backgroundColor: 'white', cursor: 'pointer' }}
            >
              {/* <Lottie animationData={Review} style={{ height: '50%' }} /> */}
              <Card.Body className="d-flex flex-column justify-content-center align-items-center"> {/* Use Bootstrap classes for vertical centering */}
                <Card.Title className='ct mb-4'>Community Reviews</Card.Title>
                <Card.Text className='tis'>
                  Discover authentic user reviews about the R34 Skyline on our website, where passionate enthusiasts share their firsthand experiences and insights. Get valuable feedback and recommendations from the community to make informed decisions and embrace the R34 GTR Skyline's legacy with confidence.
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