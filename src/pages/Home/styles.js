import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "Headline"
    "Gallery"
    "Presents"
    "Fooer";
`;

export const Presents = styled.div`
  grid-area: "Presents";
`;

export const Footer = styled.div`
  grid-area: "Footer";
`;
