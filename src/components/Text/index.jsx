import styled from 'styled-components';

const StyledText = styled.p`
margin-top: 10px;
font-size: ${props => `${props.size}px`};
font-style: ${props => props.fontStyle ? props.fontStyle : 'normal'};
color: var(--primary-color);
`;

function Text({children, size, fontStyle, ...props}) {
  return (
    <StyledText
      size={size}
      fontStyle={fontStyle}
      {...props}
    >
      {children}
    </StyledText>
  );
}

export default Text;
