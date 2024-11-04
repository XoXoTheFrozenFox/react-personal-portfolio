import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proj1.jpg";
import projImg2 from "../assets/img/proj2.jpg";
import projImg3 from "../assets/img/proj8.jpg";
import projImg4 from "../assets/img/proj3.jpg";
import projImg5 from "../assets/img/proj5.jpg";
import projImg6 from "../assets/img/proj7.jpg";
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
    {
      title: "Dog breed classification",
      description: "Used TensorFlow, Jupyter Notebooks, and Python to create a deep learning model that can classify dog breeds.",
      imgUrl: projImg1,
    },
    {
      title: "Discord bot",
      description: "A bot I built for fun which includes various entertaining commands, such as searching for random images, GIFs, and interacting with ChatGPT via an API. I build this project using JavaScript, Node.js, discord.js, NPM and GitHub.",
      imgUrl: projImg2,
    },
    {
      title: "Retro Pi",
      description: "Created a RetroPie gaming setup with a Raspberry Pi 4 and a CRT TV. Learned Linux, RetroPie, and SSH.",
      imgUrl: projImg3,
    },
    {
      title: "Email Automation",
      description: "Automated the email distribution for my Honours study using a Python script and a Google access key on the Gmail platform. All participants' names and emails were stored in an Excel document, and an email was sent for each person listed inside the Excel document.",
      imgUrl: projImg1,
    },
    {
      title: "TCP Messaging Desktop Application",
      description: "Developed a C# TCP client and server for a messaging application, using Visual Studio as the IDE and GitHub for source control.",
      imgUrl: projImg2,
    },
    {
      title: "DSS goal programming project",
      description: "Created a goal programming model for our family business, Nuwelco.",
      imgUrl: projImg3,
    },
    {
      title: "Angular Ionic Weather App",
      description: "Developed a weather app with Angular and Ionic, using weatherAPI for real-time, location-based weather data. Styled with SCSS for responsive, mobile-friendly design, integrated GPS for displaying current conditions, temperature, and forecasts, and managed source control with GitHub. Hosted on Netlify for easy access and updates.",
      imgUrl: projImg4,
    },
    {
      title: "Electron calculator app",
      description: "Developed a basic calculator app using Electron to learn how typical web technologies like JavaScript, CSS, and HTML can be used to create desktop applications.",
      imgUrl: projImg5,
    },
    {
      title: "Fruit Classification Backend",
      description: "After developing a model using the FruitQ dataset, an API was created with FastAPI and Python. Source control was managed with GitHub, and development was done in VS Code. Endpoints were tested using CURL commands and Postman.",
      imgUrl: projImg6,
    },
    {
      title: "Fruit Classification Frontend",
      description: "After developing the 'Fruit Classification Backend', a frontend was built using React, HTML, and CSS, with source control managed through GitHub. The frontend includes falling fruit animations, the ability to classify fruit, and a feature to view all available classes in the model.",
      imgUrl: projImg4,
    },
    {
      title: "Gemini React Native phishing message detection",
      description: "Developed a React Native mobile application that uses user input combined with another find tuned message that allows the app to only do phishing message classification using Gemini.",
      imgUrl: projImg5,
    },
    {
      title: "Kotlin Cybersecurity Questionnaire App",
      description: "Developed a cybersecurity questionnaire app using Kotlin and Android Studio as the IDE, with GitHub for source control and Firebase as the database for the questions (in JSON format).",
      imgUrl: projImg6,
    },
    {
      title: "Micro Service Neo4j Graph Database",
      description: "Created a Neo4j Aura database and executed various Cypher Queries to show its workings.",
      imgUrl: projImg4,
    },
    {
      title: "Spring Boot Micro Service",
      description: "Developed a Spring Boot microservice using Java and Spring Boot, with Maven as the build tool. Utilized GitHub for version control, GitHub Actions to automate the Maven build process, and Postman for testing the endpoints.",
      imgUrl: projImg5,
    },
    {
      title: "Spring Boot Microservice IaC AWS CDK deployment",
      description: "Created an AWS CDK deployment using the JavaScript CDK package and AWS CLI. Utilized NPM to install the package, JavaScript for coding the Infrastructure as Code (IaC), GitHub for version control, and VSCode as the IDE.",
      imgUrl: projImg6,
    },
    {
      title: "Video Filters OpenCV",
      description: "Developed a couple of video filters for fun using OpenCV and Python.",
      imgUrl: projImg4,
    },
    {
      title: "Tic Tac Toe React Native",
      description: "Developed a game using React Native, incorporating Expo, TypeScript, and JavaScript, with version control managed through GitHub.",
      imgUrl: projImg5,
    },
    {
      title: "SANReM Scripts",
      description: "Scripts written while participating in the SANReN cybersecurity challenge.",
      imgUrl: projImg6,
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
                <p>Code is available on GitHub (if the repo is public 👽).</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Interests</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">More</Nav.Link>
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
                      <p>I have a wide variety of interests when it comes to programming. App development, web development, AI, cloud, and cybersecurity are some of them. Currently, I am keen on exploring the Arduino and Raspberry Pi ecosystems. At the end of my coding career, I know I won't know everything, but at least I want to be able to say that I almost had one project in each discipline of computer science 😃</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>There are more projects that can be found on my GitHub! My CV can be found at the top right of the portfolio. There are options for viewing a web version and a LaTeX verion.</p>
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
