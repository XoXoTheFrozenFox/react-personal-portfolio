import { Container, Row, Col } from "react-bootstrap";
import skills from "../data/skills.json";
import history from "../data/history.json";

// Static imports for images
import htmlImage from "../assets/skills/html.png";
import cssImage from "../assets/skills/css.png";
import reactImage from "../assets/skills/react.png";
import nodeImage from "../assets/skills/node.png";
import graphqlImage from "../assets/skills/graphql.png";
import mongodbImage from "../assets/skills/mongodb.png";
import figmaImage from "../assets/skills/figma.png";
import firebaseImage from "../assets/skills/firebase.png";
import PiImage from "../assets/skills/RaspberryPi.png";
import TensorflowImage from "../assets/skills/Tensorflow.png";
import KotlinImage from "../assets/skills/Kotlin.png";
import PytorchImage from "../assets/skills/Pytorch.png";
import AWSImage from "../assets/skills/aws-icon.png";
import SpringImage from "../assets/skills/Spring.png";  // Added this to match previous code

import googleImage from "../assets/history/google.png";
import microsoftImage from "../assets/history/microsoft.png";
import netflixImage from "../assets/history/netflix.png";
import nuwelcoImage from "../assets/history/Nuwelco.jpg";  // New image
import nwuImage from "../assets/history/NWU.png";  // New image
import goldenKeyImage from "../assets/history/Golden_Key_Logo.png";  // New image

// Map your image paths to skill and history objects
const skillImageMap = {
  'skills/html.png': htmlImage,
  'skills/css.png': cssImage,
  'skills/react.png': reactImage,
  'skills/node.png': nodeImage,
  'skills/graphql.png': graphqlImage,
  'skills/mongodb.png': mongodbImage,
  'skills/figma.png': figmaImage,
  'skills/firebase.png': firebaseImage,
  'skills/RaspberryPi.png': PiImage,
  'skills/Tensorflow.png': TensorflowImage,
  'skills/Kotlin.png': KotlinImage,
  'skills/PyTorchImage.png': PytorchImage,
  'skills/aws-icon.png': AWSImage,
  'skills/Spring.png': SpringImage, // Added to match previous code
};

const historyImageMap = {
  'history/google.png': googleImage,
  'history/microsoft.png': microsoftImage,
  'history/netflix.png': netflixImage,
  'history/Nuwelco.jpg': nuwelcoImage,  // New image
  'history/NWU.png': nwuImage,  // New image
  'history/Golden_Key_Logo.png': goldenKeyImage,  // New image
};

export const Experience = () => {
  return (
    <section className="experience-section py-5" id="experience">
      <Container>
        <h2 className="title text-center mb-5">Experience</h2>
        <Row>
          {/* Left Column for Skills */}
          <Col md={6}>
            <Row>
              {skills.length > 0 ? (
                skills.map((skill, index) => (
                  <Col sm={6} className="text-center mb-4" key={index}>
                    <div className="skillImageContainer">
                      <img
                        src={skillImageMap[skill.imageSrc] || SpringImage} // Fallback image if not found
                        alt={skill.title}
                        className="img-fluid" // Ensure image is responsive
                      />
                    </div>
                    <p>{skill.title}</p>
                  </Col>
                ))
              ) : (
                <Col className="text-center">
                  <p>No skills data available.</p>
                </Col>
              )}
            </Row>
          </Col>

          {/* Right Column for Experience */}
          <Col md={6}>
            {history.length > 0 ? (
              <ul className="list-unstyled">
                {history.map((historyItem, index) => (
                  <li className="historyItem d-flex align-items-center mb-4" key={index}>
                    <img
                      src={historyImageMap[historyItem.imageSrc] || googleImage} // Fallback image if not found
                      alt={`${historyItem.organisation} Logo`}
                      className="me-3 img-fluid" // Ensure image is responsive
                    />
                    <div className="historyItemDetails">
                      <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                      <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                      <ul className="ps-3">
                        {historyItem.experiences.map((experience, idx) => (
                          <li key={idx}>{experience}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No experience data available.</p>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
