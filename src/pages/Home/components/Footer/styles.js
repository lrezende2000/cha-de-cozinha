import styled from 'styled-components';

export const Container = styled.div`
  grid-area: "Footer";
  background-color: var(--color-primary);
  padding: 100px 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const WeddingInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Couple = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 120px;
  width: 120px;
`;

export const Map = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
