import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard  from "./ProjectCard";
import projImg1 from "../assets/img/B2B.png";
import projImg2 from "../assets/img/Sost.jpg";
import projImg3 from "../assets/img/project-img1.png"

import colorSharp2 from "../assets/img/color-sharp2.png";
 // import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Projects () {

  const projects = [
    {
      title: "B2B Hotelaria Back-end",
      description: "Trabalhei com C# e AspNet",
      imgUrl: projImg1,
    },
    {
      title: "SOST Fullstack",
      description: "Laravel e docuemtos fiscais",
      imgUrl: projImg2,
    },
    {
      title: "Restaurant Order",
      description: "Projeto realizado na trybe",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <p>Foram varios projetos realizados tanto no ambiente de trabalho , quanto no curso da trybe simulando necessidades do mercado de trabalho vou deixar alguns aqui para mostrar meu conhecimento através deles</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projetos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Quem sou eu</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Oque eu sei</Nav.Link>
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
                      <p>Sou de Piraúba MG 3617000 , cidade pequena desde pequeno sou daqui , mas tenho vontade de aprender e busco sempre melhorar no que posso</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Institutos estudados : Intituto Federal de Ciencia e tecnologia(informática) , Nuclemig(Tec em redes e computadores) ,Trybe(Desenvolvimento web)</p>
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
