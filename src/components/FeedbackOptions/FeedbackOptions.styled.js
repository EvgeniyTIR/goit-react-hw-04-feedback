import styled from 'styled-components';
import { theme } from 'theme';

const Button = styled.button`
  display: inline flex;
  color: ${p => theme.colors.white};
  background-color: ${p => theme.colors.primary};
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.sm};
  text-align: center;
  font-size: ${p => p.theme.fontSizes.mt};
  margin-bottom: ${p => p.theme.space[3]}px;
  &:hover,
  &:focus {
    background-color: ${p => theme.colors.black};
  }
`;

export default Button;
