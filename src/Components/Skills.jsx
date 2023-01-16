import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export default function Skills() {
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
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Essas são minhas Hard-skills<br></br>Todas comprovadas na trybe ou no mercado de trabalho</p>
                       <div className="container text-center">
                            <div className="item">
                                
                                <h5>Sost</h5>
                                <p>Durante minha passagem pela empresa Sost, tive a oportunidade de trabalhar com as tecnologias PHP, SQL, Laravel e Eloquent, além de lidar com documentos fiscais. Com essas ferramentas, desenvolvi habilidades sólidas e profundas na programação de aplicações web, com ênfase no desenvolvimento de soluções robustas e escaláveis.

Eu trabalhei em diversos projetos, desde o desenvolvimento de novas funcionalidades até a manutenção de aplicações existentes. Sempre busquei otimizar o código, garantir a segurança e escalabilidade das soluções e atender aos requisitos dos clientes.

Trabalhando com o Laravel e Eloquent, eu me tornei proficiente na criação de soluções baseadas em MVC, além de ter uma boa compreensão de como gerenciar e acessar dados com o banco de dados. Além disso, eu também adquiri habilidades sólidas em gerenciamento de documentos fiscais e sua integração com sistemas.

                                <ul className="listTec" className="listTec">
                                  <li>PHP</li>
                                  <li>SQL</li>
                                  <li>Laravel</li>
                                  <li>Eloquent e documentos fiscais</li>
                                </ul>
</p>
                            </div>
                            <div className="item">
                                
                                <h5>Contato Seguro</h5>
                                <p>
                                Durante meu tempo na Contato Seguro, tive a oportunidade de trabalhar com as tecnologias PH(Puro)P, SQL, ReactJs e arquitetura de aplicações web. Com essas ferramentas, desenvolvi habilidades sólidas e profundas na construção de soluções escaláveis e seguras.

Eu me especializei em arquitetura de aplicações web, e tenho experiência em desenvolver soluções com boas práticas de segurança e escalabilidade. Durante meus projetos, sempre busquei otimizar o código, garantir a segurança e escalabilidade das soluções e atender aos requisitos dos clientes.

                                <ul className="listTec">
                                  <li>PHP</li>
                                  <li>SQL</li>
                                  <li>ReactJs</li>
                                  <li>Arquitetura PHP</li>
                                </ul>
                                </p>
                            </div>
                            <div className="item">
                               
                                <h5>Pampa Devs</h5>
                                <p>
                                Na Pampa Devs, tive a oportunidade de trabalhar com as tecnologias C#, SQL, Rest e Visual Studio. Durante meu tempo lá, eu me especializei em arquitetura de aplicações, tendo a oportunidade de trabalhar em projetos de grande escala e complexidade.
                                  <ul className="listTec">
                                    <li>C#</li>
                                    <li>SQL</li>
                                    <li>Rest</li>
                                    <li>VsStudio</li>
                                  </ul>
                                </p>
                            </div>
                            </div>
                       
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
