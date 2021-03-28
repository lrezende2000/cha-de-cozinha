import styled from 'styled-components';

export const Container = styled.div`
  grid-area: "Presents";
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RaffleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  margin: auto;
  margin-top: 50px;
  border-radius: 20px;
  background-color: var(--color-primary);
  width: 100%;
  max-width: 420px;
  cursor: pointer;
`;

export const LinkWrapper = styled.div`
  width: fit-content;
`;
