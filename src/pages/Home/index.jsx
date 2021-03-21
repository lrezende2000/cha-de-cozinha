import {
  Container,
  Headline,
  WeddingInvite,
  Logo,
  InviteContent,
  CoupleName,
  Invite,
  Details,
  Text,
  CoupleImage,
  Gallery,
  Presents,
  Footer,
} from './styles';

import logo from '../../assets/logo.png';

export default function Home() {
  return (
    <Container>

      <Headline>
        <WeddingInvite>
          <Logo src={logo} />
          <InviteContent>
            <CoupleName>
              Clara
              <br />
              & Miguel
            </CoupleName>
            <Invite>
              Nós estamos muito animados para celebrar esta data com você!  
            </Invite>
            <Details>
              <Text size={20}><b>Onde: </b>Igreja</Text>
              <Text size={20}><b>Quando: </b>23 DE OUTUBRO DE 2021, ÀS 16:15</Text>
              <Text size={15} fontStyle="italic" style={{ textAlign: 'end' }}>
                "No amor não há medo"
                {' '}
                <span style={{ fontSize: 12, fontStyle: 'normal' }}>&nbsp;1 Jo. 4.18</span>
                </Text>
            </Details>
          </InviteContent>
        </WeddingInvite>

        <CoupleImage />
      </Headline>

      <Gallery>

      </Gallery>

      <Presents>

      </Presents>

      <Footer>

      </Footer>

    </Container>
  );
}