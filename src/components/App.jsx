import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import Section from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const nameBtn = event.target.name;
    nameBtn === 'Good' && this.setState({ good: this.state.good + 1 });
    nameBtn === 'Neutral' && this.setState({ neutral: this.state.neutral + 1 });
    nameBtn === 'Bad' && this.setState({ bad: this.state.bad + 1 });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, counter) => {
      return acc + counter;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return `
    ${Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0}%`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Box paddingTop={6}>
        <Section title="Please Leave feedback">
          <FeedbackOptions
            // options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
        <GlobalStyle />
      </Box>
    );
  }
}
