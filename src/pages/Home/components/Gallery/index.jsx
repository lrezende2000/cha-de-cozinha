import Text from '../../../../components/Text';
import Carrousel from '../../../../components/Carrousel';

import { Container } from './styles';


function Gallery() {
  return (
    <Container>
      <Text size={75} fontFamily="Lora" style={{ color: 'var(--color-primary)', textAlign: 'center', margin: '50px 0', fontWeight: 700 }}>Nossa História</Text>
      <Carrousel />
    </Container>
  );
}

export default Gallery;
