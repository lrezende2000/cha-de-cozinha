import Text from '../../../../components/Text';
import Carousel from 'react-elastic-carousel';

import images from './images';

import { Container, CarouselImage } from './styles';
import '../../css/elasticCarousel.css';

function Gallery() {
  return (
    <Container>
      <Text
        size={75}
        fontFamily="Lora"
        fontWeight={700}
        color="var(--color-primary)"
        textAlign="center"
        style={{ margin: '50px 0' }}
      >
        Nossa História
      </Text>
      <Carousel
        breakPoints={[
          { width: 1, itemsToShow: 1, showArrows: false },
          { width: 800, itemsToShow: 2 },
          { width: 1100, itemsToShow: 3 },
        ]}
        enableAutoPlay
        autoPlaySpeed={5000}
      >
        {images.map(image => <CarouselImage key={image} src={image} />)}
      </Carousel>
    </Container>
  );
}

export default Gallery;
