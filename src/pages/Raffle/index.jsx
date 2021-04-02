import Text from '../../components/Text';

import { Container, Logo, RaffledItemContainer } from './styles';

import logo from '../../assets/logo.png';

export default function Raffle() {
  return (
    <Container>
      <Logo src={logo} />
      <Text
        size={50}
        fontFamily="Lora"
        fontWeight="700"
        color="var(--color-secondary)"
      >OBRIGADO</Text>
      <Text
        size={40}
        fontFamily="Lora"
        fontWeight="700"
        textAlign="center"
        color="var(--color-secondary)"
      >O presente sorteado foi:</Text>
      <RaffledItemContainer>
        <Text
          size={45}
          fontFamily="Lora"
          fontWeight="700"
          textAlign="center"
          color="var(--color-bright-black)"
        >Jogo de Panelas</Text>
      </RaffledItemContainer>
    </Container>
  );
}