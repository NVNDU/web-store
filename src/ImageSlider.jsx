import Carousel from 'react-bootstrap/Carousel';
import img01 from './Assets/slider/1.jpg';
import img02 from './Assets/slider/2.jpg';
import img03 from './Assets/slider/3.jpg';
import img04 from './Assets/slider/4.jpg';
import img05 from './Assets/slider/5.jpg';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function ImageSlider() {
  return (
    <Carousel fade className='corousel-container'>
      <Carousel.Item interval={1000}>
        <img src={img01} className='d-block w-100' alt='...' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src={img02} className='d-block w-100' alt='...' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src={img03} className='d-block w-100' alt='...' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={1000}>
      <img src={img04} className='d-block w-100' alt='...' />
        <Carousel.Caption>
          <h3>4thslide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={1000}>
      <img src={img05} className='d-block w-100' alt='...' />
        <Carousel.Caption>
          <h3>5th slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item >
    </Carousel>
  );
}

export default ImageSlider;