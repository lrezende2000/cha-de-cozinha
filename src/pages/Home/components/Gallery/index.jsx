import Text from '../../../../components/Text';
import Carrousel from '../../../../components/Carrousel';

import { Container } from './styles';


function Gallery() {
  return (
    <Container>
      <Text
        size={75}
        fontFamily="Lora"
        fontWeight={700}
        color="var(--color-primary)"
        textAlign="center"
        style={{ margin: '50px 0' }}>Nossa História</Text>
      <Carrousel />
    </Container>
  );
}

export default Gallery;
