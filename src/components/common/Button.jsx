import styled from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: ${props => props.large ? '1rem 2rem' : '0.75rem 1.5rem'};
  font-size: ${props => props.large ? '1.1rem' : '1rem'};
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid;
  
  ${props => props.primary && `
    background: linear-gradient(45deg, ${props.theme.primary}, ${props.theme.accent});
    color: white;
    border-color: transparent;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px ${props.theme.shadow};
    }
  `}
  
  ${props => props.secondary && `
    background: transparent;
    color: ${props.theme.primary};
    border-color: ${props.theme.primary};
    
    &:hover {
      background: ${props.theme.primary};
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 10px 25px ${props.theme.shadow};
    }
  `}

  ${props => props.ghost && `
    background: transparent;
    color: ${props.theme.text};
    border-color: ${props.theme.border};
    
    &:hover {
      background: ${props.theme.backgroundSecondary};
      border-color: ${props.theme.primary};
    }
  `}

  &:active {
    transform: translateY(0);
  }
`;

export default Button;
