import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/alien-2-svgrepo-com.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/iconmonstr-script-5.svg";
import navIcon4 from "../assets/img/iconmonstr-script-6.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/bernard-swanepoel-a2777322b/">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href="https://github.com/XoXoTheFrozenFox">
                  <img src={navIcon2} alt="GitHub" />
                </a>
                <a href="https://xoxothefrozenfox.github.io/BernardSwanepoelCV/Index.html">
                  <img src={navIcon4} alt="Portfolio" />
                </a>
                <a href="https://github.com/XoXoTheFrozenFox/react-personal-portfolio/blob/master/public/files/Bernard_Swanepoel_Resume.pdf">
                  <img src={navIcon3} alt="Resume" />
                </a>
            </div>
            <p></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
