import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';

import TrackVisibility from 'react-on-screen';
import html1 from "./html1.png"
import css1 from "./css1.png"
import { BrowserRouter,Route,Routes } from "react-router-dom";

import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import project1 from "./project1.png"
import project2 from "./project2.png"
import net from "./net.png"
import logo from "./logo.png"
import fbs from "./fbs.png"
import nav from "./nav.png"
import login from "./login.jpeg"



export const Projects = () => {
  const user="false"

  const projects = [
    {
      title: "Food Menu",
      description: "Food menu using react with API",
      imgUrl: project1,
    },
    {
      title: "Cart",
      description: "using API ",
      imgUrl: project2,
      
    },
    {
      title: "Netflix UI",
      description: "Build UI using html,css,bootstrap",
      imgUrl: net,
    },
    {
      title: "Navbar",
      description: "Build Navbar using html,css,bootstrap",
      imgUrl: nav,
    },
    {
      title: "Facebook UI",
      description: "Build UI with html,css,bootstrap",
      imgUrl: fbs,
    },
    {
      title: "Display data API",
      description: "Display data from API",
      imgUrl: login,
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
                <h2 className="pr">Projects</h2>
                <p> I will gain hands-on experience working with HTML, CSS, JavaScript, and React.js to create a functional and engaging web application. </p>
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                  
                 <p>llllllllllll</p>
 


                    


    
 
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src=""></img>
    </section>
  )
}
export default Projects