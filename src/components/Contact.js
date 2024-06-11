import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { TextCenter } from "react-bootstrap-icons";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
          <div style={{ display: 'flex', justifyContent: 'center' }}></div>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : "" }>
                <h2>Education</h2>
                <form onSubmit={handleSubmit} >
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                    <h3>BSc. Hons Computer Science and Information Technology <br></br> NWU <br></br> 2023-2024</h3>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <h3></h3>
                    </Col>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <Col size={12} sm={6} className="px-1">
                    <h3>BSc. Information Technology <br></br> NWU <br></br> 2021-2023</h3>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <h3></h3>
                    </Col>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <Col size={12} className="px-1">
                    <h3>TEFL-180 hours<br></br> i-to-i <br></br> 2023</h3>
                    </Col>
                    <Col size={12} className="px-1">
                    <h3></h3>
                    </Col>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <Col size={12} className="px-1">
                    <h3> Matric certificate <br></br> Wesvalia <br></br> 2016-2020 </h3>
                    </Col>
                    <Col size={12} className="px-1">
                    <h3></h3>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
