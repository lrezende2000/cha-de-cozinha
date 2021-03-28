import Text from '../../../../components/Text';

import { Container, WeddingInfo, Couple, Logo, Map } from './styles';

import MapImage from '../../../../assets/mapsMaragogi.png';
import logo from '../../../../assets/logo.png';

export default function Footer() {
  return (
    <Container>
      <WeddingInfo>
        <Couple>
          <Logo src={logo} />
          <Text size={40} fontFamily="Lora" style={{ marginLeft: '20px', fontWeight: 700 }}>
          Clara<br />
          & Miguel
          </Text>
        </Couple>
        <Text size={25} fontFamily="Lora" style={{ fontWeight: 700 }}>23 DE OUTUBRO DE 2021, ÀS 16H15</Text>
        <Text size={25} fontFamily="Lora" style={{ fontWeight: 700 }}>Local: Sítio Dom Bosco, s/n - Maragogi - AL</Text>
      </WeddingInfo>
      <Map>
        <img src={MapImage} alt="Map" />
      </Map>
    </Container>
  );
}