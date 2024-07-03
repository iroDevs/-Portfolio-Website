import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import {AiOutlineWhatsApp} from 'react-icons/ai'


export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "React", "Node", "JavaScript","Laravel" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
              <div >
                <span className="tagline">Desenvolvedor Web </span>
                <h1>{`Experiência Solida em`}<br></br> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "PHP", "PY", "JS" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Sou um desenvolvedor FullStack com 2 anos de experiência em tecnologias como React, Node, PHP, SQL, NOSQL. Tenho habilidades sólidas para desenvolver soluções web escaláveis e seguras, e estou sempre disposto a aprender novas tecnologias e melhorar minhas habilidade
                 <ul className="lista-info">
                  <li>cidade: Piraúba MG ( 36170000 )</li>
                  <li>nome: Pedro Henrique Loures Oliveira</li>
                  <li>considero minha remuneração ideial algo entre: R$3500 ate R$4500 </li>
                  <li>Tenho o curso da Trybe completo em desenvolvimento web , e atualmente estou cursando superior em analise e desenvolvimento de sistemas</li>
                 </ul>
                  </p>
              </div>

          </Col>
          <Col xs={12} md={6} xl={5}>

                <div>
                 <img className="hide-mobile" src={headerImg} alt="Header Img"/>
                </div>

          </Col>
        </Row>
      </Container>
    </section>
  )
}
