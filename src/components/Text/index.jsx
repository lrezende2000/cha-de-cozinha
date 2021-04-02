import styled from 'styled-components';

const StyledText = styled.p`
  margin-top: 10px;
  font-size: ${props => `${props.size}px`};
  font-style: ${props => props.fontStyle ? props.fontStyle : 'normal'};
  font-family: ${props => props.fontFamily ? props.fontFamily : 'Roboto'};
  font-weight: ${props => props.fontWeight ? props.fontWeight : 'regular'};
  text-align: ${props => props.textAlign ? props.textAlign : 'left'};
  color: ${props => props.color ? props.color : 'var(--color-primary)'};
`;

function Text({
  children,
  size,
  fontStyle,
  fontFamily,
  fontWeight,
  textAlign,
  color,
  ...props
}) {
  return (
    <StyledText
      size={size}
      fontStyle={fontStyle}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      textAlign={textAlign}
      color={color}
      {...props}
    >
      {children}
    </StyledText>
  );
}

export default Text;
