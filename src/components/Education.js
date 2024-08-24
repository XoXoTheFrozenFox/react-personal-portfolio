import { Container, Row, Col } from "react-bootstrap";
import educationImg from "../assets/img/education-img.svg"; // Ensure to replace with the correct image path
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Education = () => {
  return (
    <section className="contact" id="education">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={educationImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
          <div style={{ display: 'flex', justifyContent: 'center' }}></div>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : "" }>
                <h2>Education</h2>
                  <Row>
                    <Col size={12} sm={8} className="px-1">
                    <h3>BSc. Hons Computer Science and Information Technology <br></br> NWU <br></br><span class="blue-text">2023-2024</span></h3>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <h3></h3>
                    </Col>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <Col size={12} sm={8} className="px-1">
                    <h3>BSc. Information Technology <br /> NWU <br /><span class="blue-text">2021-2023</span></h3>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <h3></h3>
                    </Col>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <Col size={12} className="px-1">
                    <h3>TEFL-180 hours<br></br> i-to-i <br></br> <span class="blue-text">2023</span></h3>
                    </Col>
                    <Col size={12} className="px-1">
                    <h3></h3>
                    </Col>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <Col size={12} className="px-1">
                    <h3> Matric certificate <br></br> Wesvalia <br></br> <span class="blue-text">2016-2020</span> </h3>
                    </Col>
                    <Col size={12} className="px-1">
                    <h3></h3>
                    </Col>
                  </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
