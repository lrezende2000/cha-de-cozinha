import styled, { keyframes } from 'styled-components';

const grow = keyframes`
  to {
    transform: scaleY(2);
  }
`;

export const Load = styled.span`
  background: var(--color-primary);
  width: 10px;
  height: 20px;
  display: inline-block;
  margin: 0 2px;

  &:nth-child(1) {
    animation: ${grow} 0.5s -0.45s ease-in-out alternate infinite;
  }
  &:nth-child(2) {
    animation: ${grow} 0.5s -0.3s ease-in-out alternate infinite;
  }
  &:nth-child(3) {
    animation: ${grow} 0.5s -0.15s ease-in-out alternate infinite;
  }
  &:nth-child(4) {
    animation: ${grow} 0.5s 0s ease-in-out alternate infinite;
  }
`;
