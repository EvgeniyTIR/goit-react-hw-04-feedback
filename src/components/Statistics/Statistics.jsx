import PropTypes from 'prop-types';
import Item from './Statistics.styled';
import { Box } from 'components/Box';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <Box as="ul" width="200px" marginLeft="auto" marginRight="auto">
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item>Total: {total}</Item>
      <Item>Positive feedback: {positivePercentage}</Item>
    </Box>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
