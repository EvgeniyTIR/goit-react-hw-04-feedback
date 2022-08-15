import styled from 'styled-components';
import { theme } from 'theme';

const Item = styled.li`
  color: ${p => theme.colors.table};
  font-size: ${p => p.theme.fontSizes.m};
`;

export default Item;
