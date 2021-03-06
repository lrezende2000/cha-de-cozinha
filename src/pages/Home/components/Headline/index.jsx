import Text from '../../../../components/Text';

import {
  Container,
  WeddingInvite,
  Logo,
  InviteContent,
  Invite,
  Details,
} from './styles';

import logo from '../../../../assets/logo.png';

function Headline() {
  return (
    <Container>
      <WeddingInvite>
        <Logo src={logo} />
        <InviteContent>
          <Text
            size={130}
            fontFamily="Lora"
            fontWeight={700}
            color="var(--color-secondary)"
            textAlign="center"
          >
            Clara
            <br />
            &
            <br />
            Miguel
            </Text>
          <Invite>
            Nós estamos muito animados para celebrar esta data com você!
            </Invite>
          <Details>
            <Text
              size={15}
              fontStyle="italic"
              color="var(--color-secondary)"
            >
              "No amor não há medo"
                {' '}
              <span style={{ fontSize: 12, fontStyle: 'normal' }}>&nbsp;1 Jo. 4.18</span>
            </Text>
            <Text
              size={20}
              fontFamily="Lora"
              color="var(--color-secondary)"
            >23 DE OUTUBRO DE 2021, ÀS 16:15</Text>
          </Details>
        </InviteContent>
      </WeddingInvite>
    </Container>
  );
}

export default Headline;
