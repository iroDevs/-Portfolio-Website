import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Row, Col  ,Container } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg"
import colorSharp from "../assets/img/color-sharp.png"

export default function Skills() {
    const responsive = {
        superLargeDesktop: {
         
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
      };

  return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>Essas são as minhas habilidades</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                            <img src={meter1} alt="image"></img>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img className="bg-left" src={colorSharp}></img>
    </section>
  )
}
