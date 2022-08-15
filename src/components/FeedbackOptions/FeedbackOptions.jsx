import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './FeedbackOptions.styled';
import { Box } from 'components/Box';

export class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <Box display="flex" justifyContent="center" gridGap="10px">
        <Button type="button" name="Good" onClick={onLeaveFeedback}>
          Good
        </Button>
        <Button type="button" name="Neutral" onClick={onLeaveFeedback}>
          Neutral
        </Button>
        <Button type="button" name="Bad" onClick={onLeaveFeedback}>
          Bad
        </Button>
      </Box>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
