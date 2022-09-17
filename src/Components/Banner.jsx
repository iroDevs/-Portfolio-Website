import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Zap from '../assets/img/whatsIcon.svg'
import {AiOutlineWhatsApp} from 'react-icons/ai'

export default function Banner() {
  return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Bem vindo ao meu Portifolio Web</span>
                    <h1>{'Oi, eu sou o Pedro'}</h1><span className="wrap">Desenvolvedor Web</span>
                    <p>Obrigado por visitar minha pagina , espero que goste</p>
                    <button onClick={()=> console.log('Conectando')}>Me mande uma messagem <AiOutlineWhatsApp size={24}></AiOutlineWhatsApp></button>
                </Col>
                <Col xs={12} md={6} xl={7}>
                    <img src={"aa"} alt="Background"></img>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
