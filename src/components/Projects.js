import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const fullstack_projects = [
    {
      title: "Wages Program Enhancement",
      description: "",
      languages: "Languages: Javascript",
      frameworks: "Frameworks: Node.js",
      imgUrl: projImg1,
    },
    {
      title: "Day Planner Mobile App",
      description: "",
      languages: "Languages: Java",
      frameworks: "Frameworks/Technologies: Android Studio, Firebase, JUnit, Espresso",
      imgUrl: projImg2,
    },
    {
      title: "Feedback and Rating Platform for Teams",
      description: "",
      languages: "Languages: Java, Javascript, SQL",
      frameworks: "Frameworks: React, SpringBoot, MySQL",
      imgUrl: projImg3,
    },
    {
      title: "Personal Website",
      description: "",
      languages: "Languages: Javascript",
      frameworks: "Frameworks: React",
      imgUrl: projImg1,
    },
  ];

  const ml_projects = [
    {
      title: "Fine-Tune GPT",
      description: "",
      languages: "Languages: Python",
      frameworks: "Frameworks: Keras",
      imgUrl: projImg1,
    },
    {
      title: "Retrieval Augmented Generation",
      description: "",
      languages: "Languages: Python",
      frameworks: "Frameworks: Keras",
      imgUrl: projImg2,
    },
    {
      title: "Vector Database",
      description: "Design & Development",
      languages: "Languages: Python",
      frameworks: "Frameworks: Keras",
      imgUrl: projImg3,
    },
    {
      title: "Sequence-to-Sequence Text Summarization",
      description: "",
      languages: "Languages: Python",
      frameworks: "Tensorflow, PyTorch",
      imgUrl: projImg1,
    },
    {
      title: "Sequence Modeling for Text Generation",
      description: "",
      languages: "Languages: Python",
      frameworks: "Frameworks: Keras",
      imgUrl: projImg2,
    },
    {
      title: "Text Classification for Sentiment Analysis",
      description: "",
      languages: "Languages: Python",
      frameworks: "Frameworks: Sci-kit Learn",
      imgUrl: projImg3,
    },
  ];

  const other_projects = [
    {
      title: "Peer-to-Peer Messaging Network",
      description: "",
      languages: "Languages: C++",
      frameworks: "",
      imgUrl: projImg1,
    },
    {
      title: "25th Hour Startup",
      description: "Design & Development",
      languages: "",
      frameworks: "",
      imgUrl: projImg2,
    },
    {
        title: "Mock Stock Market Day Exchange",
        description: "",
        languages: "Languages: Java",
        frameworks: "",
        imgUrl: projImg1,
      },
      {
        title: "Binary Search Tree Map Implementation",
        description: "",
        languages: "Languages: C++",
        frameworks: "",
        imgUrl: projImg2,
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
                <p>My diverse background has allowed me to complete different types of projects, both academic and personal. I have a plethora of experience in developing full-stack applications, machine learning projects, and more.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Full-Stack Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">AI/Machine Learning</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Other</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          fullstack_projects.map((project, index) => {
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
                        <Row>
                            {
                                ml_projects.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                        <Row>
                            {
                                other_projects.map((project, index) => {
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