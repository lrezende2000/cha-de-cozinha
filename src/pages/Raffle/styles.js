import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
`;

export const Logo = styled.img`
  height: 130px;
  width: 130px;
`;

export const RaffledItemContainer = styled.div`
  width: 100%;
  max-width: 550px;
  background-color: var(--color-secondary);
  border-radius: 10px;
  margin-top: 50px;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 550px) {
    width: 90%;
  }
`;
