import Text from '../../../../components/Text';
import Carrousel from '../../../../components/Carrousel';

import { Container } from './styles';


function Gallery() {
  return (
    <Container>
      <Text size={40} style={{ color: 'var(--secondary-color)', textAlign: 'center', margin: '50px 0' }}>Nossa História</Text>
      <Carrousel />
    </Container>
  );
}

export default Gallery;
