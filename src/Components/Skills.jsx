import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Row, Col  ,Container } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
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
                    <h2>Conhecimentos</h2>
                    <p>Minhas Hard Skills , todas testadas e compravadas na trybe ou no mercado de trabalho</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                            <img src={meter1} alt="image"></img> 
                            <p>JavaScript</p>
                        </div>
                        <div className="item">
                            <img src={meter2} alt="image"></img> 
                            <p>NodeJS</p>
                        </div>
                        <div className="item">
                            <img src={meter3} alt="image"></img> 
                            <p>ReactJs</p>
                        </div>
                        <div className="item">
                            <img src={meter3} alt="image"></img> 
                            <p>SQL and NOSQL</p>
                        </div>
                        <div className="item">
                            <img src={meter2} alt="image"></img> 
                            <p>PHP</p>
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
