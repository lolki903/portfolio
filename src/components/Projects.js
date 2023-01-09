import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import project1 from '../assets/img/project/project1.png'
import project2 from '../assets/img/project/project2.png'
import project3 from '../assets/img/project/project3.png'
import project4 from '../assets/img/3.gif'
import project5 from '../assets/img/4.gif'
export const Projects = () => {
    const projects = [
        {
            title: "Serial",
            description: "An information site on films and series",
            imageUrl: project1,
            link: "https://www.google.com"
        },
        {
            title: "Lebpay",
            description: "A banking site where we can connect with sessions made in php.",
            imageUrl: project2,
            link: "https://www.google.com"
        },
        {
            title: "Simhati",
            description: "A site made for a private individual on Zen and the movements that can relax.",
            imageUrl: project3,
            link: "https://www.google.com"
        },
    ]
    const projectsMobile = [
        {
            title: "Cloud or down",
            description: "An information application on the rules and question a games society",
            imageUrl: project4,
            link: "https://www.google.com"
        },
        {
            title: "Socialapp",
            description: "A banking site where we can connect with sessions made in php.",
            imageUrl: project5,
            link: "https://www.google.com"
        },
        {
            title: "Simhati",
            description: "A site made for a private individual on Zen and the movements that can relax.",
            imageUrl: project3,
            link: "https://www.google.com"
        },
    ]

  return (
    <section className="projects" id="projects">
        <Container>
            <Row>
                <Col>
                <h2>Project</h2>
                <p>Les projet sur lequel j'ai travaillé</p>
                <Tab.Container id="project-tabs" defaultActiveKey="first">
                <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Developpement Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Developpement Mobile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Developer Logiciel</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                        {projects.map((project, index) => {
                            return (
                               <ProjectCard key={index} {...project} />
                            
                        )})}
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {projectsMobile.map((project, index) => {
                            return (
                               <ProjectCard key={index} {...project} />
                            
                        )})}
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third" style={{texAlign: "center", fontSize:"4rem",fontWeight:700, left:"50%", transform: "translateX(45%)", marginBottom:"5%"}}>
                       A venir...
                    </Tab.Pane>

                </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

