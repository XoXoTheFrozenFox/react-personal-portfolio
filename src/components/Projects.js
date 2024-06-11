import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proj1.jpg";
import projImg2 from "../assets/img/proj2.jpg";
import projImg3 from "../assets/img/proj3.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "C# API",
      description: "Created a RESTful api using C#, dotnet-ef, Azure, Github Actions(CI-CD pipeline), .NET core and tested the endpoints with postman.",
      imgUrl: projImg1,
    },
    {
      title: "CV",
      description: "Created a CV using HTML, CSS, and JavaScript and hosted the CV using GitHub Pages.",
      imgUrl: projImg2,
    },
    {
      title: "Fruit AI app",
      description: "Developed an AI model to distinguish between fresh and rotten apples, bananas, and oranges. Utilized Python, Jupyter Notebooks, and Google Colab for training and integrated the model into a mobile app with the Kivy Python framework.",
      imgUrl: projImg3,
    },
    {
      title: "FITS web-app",
      description: "A Flask web app with a UI for uploading FITS files and interacting via API for operations like open, read, write, append, rename, and delete.",
      imgUrl: projImg1,
    },
    {
      title: "Cryptography",
      description: "Developed a C# app with encryption/decryption functions for RSA, Caesar, Vigenère, Transposition, and a hybrid RSA-AES cipher, balancing security and speed.",
      imgUrl: projImg2,
    },
    {
      title: "UI-path project",
      description: "This project automated CRUD operations on a website using UIpath. Each operation was marked as ”PASSED” if executed correctly and ”FAILED” if executed incorrectly.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>All the code is available on GitHub.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>All of these projects except the CV were done as part of my coursework for my degrees (BSc. IT and BSc. Hons Computer Science and Information Technology).</p>
                      <p>&nbsp;</p>
                      <p>&nbsp;</p>
                      <p>&nbsp;</p>
                      <p>&nbsp;</p>
                      <p>&nbsp;</p>
                      <p>&nbsp;</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Their are more projects that can be found on my GitHub! My CV can be found at the top right of the portfolio.</p>
                      <p>&nbsp;</p>
                      <p>&nbsp;</p>
                      <p>&nbsp;</p>
                      <p>&nbsp;</p>
                      <p>&nbsp;</p>
                      <p>&nbsp;</p>
                      <p>&nbsp;</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
