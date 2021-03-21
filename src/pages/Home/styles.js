import styled from 'styled-components';
import couple from '../../assets/couple.png';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "Headline"
    "Gallery"
    "Presents"
    "Fooer";
`;

export const Headline = styled.div`
  grid-area: "Headline";
  display: flex;
`;

export const WeddingInvite = styled.div`
  width: 50%;
  padding: 5%;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--secondary-color);
`;

export const Logo = styled.img`
  height: 70px;
  width: 70px;
`;

export const InviteContent = styled.div`
  width: 100%;
`;

export const CoupleName = styled.h1`
  margin-top: 50px;
  font-size: 100px;
  color: var(--primary-color);
`;

export const Invite = styled.p`
  margin-top: 50px;
  font-size: 25px;
  font-weight: 500;
  color: var(--primary-color);
`;

export const Details = styled.div`
  margin: 50px 0;
`;

export const Text = styled.p`
  margin-top: 10px;
  font-size: ${props => `${props.size}px`};
  font-style: ${props => props.fontStyle ? props.fontStyle : 'normal'};
  color: var(--primary-color);
`;

export const CoupleImage = styled.div`
  width: 50%;
  background-image: url(${couple});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--primary-color);
`;

export const Gallery = styled.div`
  grid-area: "Gallery";
`;

export const Presents = styled.div`
  grid-area: "Presents";
`;

export const Footer = styled.div`
  grid-area: "Footer";
`;
