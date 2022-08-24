import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './FeedbackOptions.styled';
import { Box } from 'components/Box';

export class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback, value } = this.props;
    return (
      <Box display="flex" justifyContent="center" gridGap="10px">
        {value.map(el => (
          <Button
            type="button"
            onClick={() => onLeaveFeedback(el)}
            name={el}
            key={el}
          >
            {el}
          </Button>
        ))}
      </Box>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
