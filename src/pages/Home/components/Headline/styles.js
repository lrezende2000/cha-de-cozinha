import styled from 'styled-components';

export const Container = styled.div`
  grid-area: "Headline";
  display: flex;
`;

export const WeddingInvite = styled.div`
  width: 100%;
  padding: 5%;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary);
`;

export const Logo = styled.img`
  height: 70px;
  width: 70px;
`;

export const InviteContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Invite = styled.p`
  margin-top: 50px;
  font-size: 25px;
  font-weight: 500;
  color: var(--color-secondary);
`;

export const Details = styled.div`
  margin: 50px 0;
`;
