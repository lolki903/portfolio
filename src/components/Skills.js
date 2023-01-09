import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import reactn from '../assets/img/icon-react-native-24.png'
import elec from '../assets/img/2.png'
import react from '../assets/img/react.png'
import node from '../assets/img/node.png'
import php from '../assets/img/php.png'
import mongodb from '../assets/img/mongodb.png'
import sass from '../assets/img/sass.png'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
  return (
    <section className="skills" id="skills">
        <Container>
            <Row className='align-items-center'>
                <Col>
                    <div className="skills-bx">
                        <h2>Skills</h2>
                        <p>Voici les skills accumeler</p>
                        <Carousel responsive={responsive} infinite={false} className="skill-slider">
                            <div className="skill-item">
                                <img src={php} alt="skill" />
                                <h5>PHP</h5>
                            </div>
                            <div className="skill-item">
                                <img src={react} alt="skill" />
                                <h5>React</h5>
                            </div>
                            <div className="skill-item">
                                <img src={reactn} alt="skill" />
                                <h5>React Native</h5>
                            </div>
                            <div className="skill-item">
                                <img src={node} alt="skill" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="skill-item">
                                <img src={elec} alt="skill" />
                                <h5>Electron js</h5>
                            </div>
                            <div className="skill-item">
                                <img src={mongodb} alt="skill" />
                                <h5>MongoDB</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}