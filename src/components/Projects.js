import { Container, Col, Tab, Nav, Row } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";
import 'animate.css';

export const Projects = () => {
    const projects = [
        {
            tittle: "Lissome",
            description: "Landing Page",
            imgUrl: projImg1,
        },
        {
            tittle: "Lissome",
            description: "Web Development",
            imgUrl: projImg2,
        },
        {
            tittle: "Lissome",
            description: "Web Development",
            imgUrl: projImg3,
        },
        {
            tittle: "Lissome",
            description: "Web Development",
            imgUrl: projImg1,
        },
        {
            tittle: "Lissome",
            description: "Web Development",
            imgUrl: projImg2,
        },
        {
            tittle: "Lissome",
            description: "Web Development",
            imgUrl: projImg3,
        },

    ];


    return (
        <section className="project" id="projects">

            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                    {({isVisible}) => 
                        <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                            <h2>Projects</h2>
                            <p>Some projects that i have worked on: </p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    {/* <Nav.Item>
                                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                                    </Nav.Item>
                                    {/* <Nav.Item>
                                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Tab three</Nav.Link>
                                    </Nav.Item> */} 
                                </Nav>
                                <Tab.Content>
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

                                    <Tab.Pane eventKey="third">
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
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                     }
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-img-right" src={colorSharp2} />
        </section>

    )
}