import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";

import { api } from '../../../../services/api';

import Carousel from 'react-elastic-carousel';
import Text from '../../../../components/Text';

import { Container, RaffleButton, LinkWrapper } from './styles';
import './carouselStyles.css';

export default function Presents() {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const { data: { itens } } = await api.get('/?limit=10');

    setItems(itens.docs);
  };

  const getImagePath = (image) => `/images/${image}.png`;

  useEffect(() => {
    getItems();
  }, [])

  return (
    <Container>
      <Text size={75} fontFamily="Lora" style={{ color: 'var(--color-primary)', textAlign: 'center', margin: '50px 0', fontWeight: 700 }}>Lista de presentes</Text>
      <Text size={35} style={{ color: 'var(--color-primary)', textAlign: 'center', margin: '50px auto', maxWidth: '55%' }}>
        Os nossos presentes foram escolhidos com carinho. Se puder, ajude-nos com o início de nossa família.
      </Text>
      <Carousel showArrows={false} enableAutoPlay autoPlaySpeed={5000}>
        {items
          .filter(item => item.active)
          .map(item =>
            <div key={item._id}>
              <img src={getImagePath(item.name)} width={300} alt={item.name} />
            </div>
          )
        }
      </Carousel>
      <LinkWrapper>
        <Link to="/raffle">
          <RaffleButton>
            <Text size={30} style={{ margin: 0 }}>
              QUERO PRESENTEAR
            </Text>
            &nbsp;&nbsp;&nbsp;
            <BsArrowRight style={{ width: '35px', height: '35px', fill: 'var(--color-white)' }} />
          </RaffleButton>
        </Link>
      </LinkWrapper>
      <Text size={30} style={{ color: 'var(--color-primary)', textAlign: 'center', margin: '50px auto' }}>
        P.s: Ao clicar no botão, um sorteio será feito e o presente será escolhido.
      </Text>
    </Container>
  );
}