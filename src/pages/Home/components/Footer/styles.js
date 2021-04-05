import styled from 'styled-components';

export const Container = styled.div`
  grid-area: "Footer";
  background-color: var(--color-primary);
  padding: 100px 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;

    div + div {
      margin-top: 50px;
    }
  }
`;

export const WeddingInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 750px) {
    align-items: center;
  }
`;

export const Couple = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 120px;
  width: 120px;

  @media (max-width: 750px) {
    width: 90px;
    height: 90px;
  }
`;

export const Map = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    img {
      width: 400px;
    }
  }

  @media (max-width: 850px) {
    img {
      width: 300px;
    }
  }
`;
