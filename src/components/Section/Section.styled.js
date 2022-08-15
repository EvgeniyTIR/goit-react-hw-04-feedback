import styled from 'styled-components';
import { theme } from 'theme';

const Title = styled.h2`
  color: ${p => theme.colors.black};
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export default Title;
