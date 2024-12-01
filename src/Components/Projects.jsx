import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import CardProject from "./sub-components/CardProject";
import projeto1 from '../assets/projetos/projeto1.png'
import projeto2 from '../assets/projetos/projeto2.png'
import projeto3 from '../assets/projetos/projeto3.png'
import projeto4 from '../assets/projetos/projeto4.png'
import Slider from "react-slick";

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

  const texto = ""
  const url = "https://www.next4.com.br/wp-content/themes/yootheme/cache/f2/next4-blog-site-profissional-f2be572e.png"
  const title = "Projeto 1"

  const widthDaTelaemPixels = window.innerWidth

  const settings = {
    dots: widthDaTelaemPixels > 1024 ? true : false,
    infinite: true,
    speed: 500,
    slidesToShow: widthDaTelaemPixels > 1024 ? 3 : 1,
    slidesToScroll: 1
  };

  return (
    <section className="projects" id="projetos">
        <div className="">
            <div className="">
                <div className="col-12">
                    <div className="projects-bx wow zoomIn">
                      <h2>Projetos</h2>
                      <div className="slider-container">
                        <Slider {...settings}>
                          <div>
                            <CardProject text={texto} title={'Portal Cosems'} img={projeto1} url={'https://portal.cosemsmg.org.br/login'} />
                          </div>
                          <div>
                            <CardProject text={texto} title={'Drumundo&Crivellari Advogados'} img={projeto2} url={'https://drumondcrivellari.adv.br/'} />
                          </div>
                          <div>
                          <CardProject text={texto} title={'Site Cosems'} img={projeto3} url={'https://www.cosemsmg.org.br/'} />
                          </div>
                          <div>
                          <CardProject text={texto} title={'SOST'} img={projeto4} url={'#'} />
                          </div>
                        
                        </Slider>

                      </div>

                      {/*<div className="cards-list">
                        <CardProject text={texto} title={'Portal Cosems'} img={projeto1} url={'https://portal.cosemsmg.org.br/login'} />
                        <CardProject text={texto} title={'Drumundo&Crivellari Advogados'} img={projeto2} url={'https://drumondcrivellari.adv.br/'} />
                      </div>
                      <div className="cards-list">
                        <CardProject text={texto} title={'Site Cosems'} img={projeto3} url={'https://www.cosemsmg.org.br/'} />
                        <CardProject text={texto} title={'SOST'} img={projeto4} url={'#'} />
                      </div>*/}

                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}
