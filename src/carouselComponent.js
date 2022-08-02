import  Carousel  from "react-bootstrap/Carousel";
import Tobi from './images/Tobi.jpg'
import Emmi from './images/Emmi.jpg'
import webpics2 from './images/webpics2.jpg'



const CarouselComponent = () => {
    return (
        <div>
            <Carousel className="sliderHeight">
                <Carousel.Item className="sliderHeight">
                    <img
                        className="d-block w-100"
                        src={Tobi}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="sliderText">PRUDENCE EKI</h3>
                        <p className="sliderText">TOBI AMUSAN has made Nigeria proud by winning the World 100m race Competition.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="sliderHeight">
                    <img
                        className="d-block w-100"
                        src={Emmi}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="sliderText">EBUBE NWAGBO</h3>
                        <p className="sliderText">TECH4DEV in conjuction with EMMI Delta is currently training 150 youths on professional skills.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="sliderHeight">
                    <img
                        className="d-block w-100"
                        src={webpics2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="sliderText">DANIEL ODIACHI</h3>
                        <p className="sliderText">
                            Learning coding involves devotion of time and attention. A full Stack Developer does both Frontend and Backend.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}


export default CarouselComponent;