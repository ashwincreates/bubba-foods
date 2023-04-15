import { Carousel } from 'react-bootstrap';

function BubbaCarousel() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            height={400}
            src="/Ads.png"
            alt="First slide"
          />
          <Carousel.Caption>
            Banner 1 
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            height={400}
            src="/Ads.png"
            alt="First slide"
          />
          <Carousel.Caption>
            Banner 2 
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default BubbaCarousel;