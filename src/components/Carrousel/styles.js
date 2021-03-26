import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Image = styled.img`
  display: none;
  height: 500px;
  transition: .5s;

  &.activeSlide {
    display: block;
    height: 600px;
  }

  &.lastSlide {
    display: block;
    height: 500px;
  }

  &.nextSlide {
    display: block;
    height: 500px;
  }
`;

export const Button = styled.button`
  background: gray;
  display:flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  color: white;
  width: 30px;
  height: 30px;
  border-color: transparent;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background-color: black;
  }

  &.prev {
    left: 10px;
  }
  &.next {
    right: 10px;
  }
`;
