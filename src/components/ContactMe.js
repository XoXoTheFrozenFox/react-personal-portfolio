import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const ContactMe = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs.sendForm('service_s34ghfj', 'template_wsc17hc', form.current, '_5LIJSRid7ucG8SLD')
      .then(
        () => {
          setStatus({ success: true, message: 'Message sent successfully' });
          form.current.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error.text);
          setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        }
      )
      .finally(() => {
        setButtonText("Send");
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone No."
                          required
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          name="message"
                          rows="6"
                          placeholder="Message"
                          required
                        ></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};