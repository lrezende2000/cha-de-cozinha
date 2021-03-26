import { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import { Container, Image, Button } from './styles';

import wife from '../../assets/wife.png';
import husband from '../../assets/husband.png';

const images = [
  wife,
  husband,
  wife,
  wife,
  wife,
  wife,
];

function Carrousel() {
  const lastIndex = images.length - 1;
  const [index, setIndex] = useState(1);

  const prevIndex = () => {
    if (index - 1 < 0) return lastIndex;

    return index - 1;
  };

  const nextIndex = () => {
    if (index + 1 >= images.length) return 0;

    return index + 1;
  }

  useEffect(() => {
    if (index <= 0) {
      setIndex(1);
    }
    if (index >= lastIndex) {
      setIndex(lastIndex - 1);
    }
  }, [index, lastIndex]);

  return (
    <Container>
      <Button className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </Button>
      { images.map((image, imageIndex) => {
        console.log(index);
        let position = '';
        if (imageIndex === prevIndex(index)) {
          position = 'lastSlide';
        }
        if (imageIndex === index) {
          position = 'activeSlide';
        }
        if (imageIndex === nextIndex(index)) {
          position = 'nextSlide';
        }
        

        return (
          <Image key={imageIndex} className={position} src={image} alt="Casal" />
        );
      })}
      <Button className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </Button>
    </Container>
  );
}

export default Carrousel;
