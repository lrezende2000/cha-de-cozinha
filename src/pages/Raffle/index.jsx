import { useEffect, useState } from 'react';

import { api, getActiveItems } from '../../services/api';

import Text from '../../components/Text';
import Loading from '../../components/Loading';
import { Container, Logo, RaffledItemContainer } from './styles';

import logo from '../../assets/logo.png';

export default function Raffle() {
  const [raffledItem, setRaffledItem] = useState(false);

  const raffleItem = async () => {
    const items = await getActiveItems();
    const index = Math.floor(Math.random() * items.length);
    const item = items[index];

    api.post(`/update-item/${item._id}`, { active: false }).then(() => {
      setRaffledItem(item);
      localStorage.setItem('@chadecozinha:raffleditem', JSON.stringify(item));
    }).catch(() => alert('Não foi possível sortear!'));
  }

  useEffect(() => {
    const item = localStorage.getItem("@chadecozinha:raffleditem");

    if (item) {
      setTimeout(() => {
        setRaffledItem(JSON.parse(item));
      }, 2000);
    } else {
      raffleItem();
    }
  }, []);

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
        {raffledItem
        ? (
          <Text
            size={45}
            fontFamily="Lora"
            fontWeight="700"
            color="var(--color-bright-black)"
          >{raffledItem.name}</Text>
        )
        : <Loading />
        }
      </RaffledItemContainer>
    </Container>
  );
}