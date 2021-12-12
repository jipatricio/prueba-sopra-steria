import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background: ${(props) => (props.primary ? 'white' : '#1976D2')};
  font-size: 1em;
  margin: 2em;
  cursor: pointer;
  border: ${(props) => (props.primary ? '1px solid blue' : '2px solid gray')};
  border-radius: 8px;
  transition: all 0.2s ease;
  color: white;
  text-transform: uppercase;

  &:hover {
    background: #0a6464;
  }
`;
