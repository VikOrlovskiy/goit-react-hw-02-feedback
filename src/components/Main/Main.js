import React, { Component } from 'react';

import Statistics from '../Statistics';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';

export default class Main extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onClickIncrementValue = e => {
    if (e.target.textContent === 'good') {
      this.setState(prevState => ({ good: prevState.good + 1 }));
      return;
    }
    if (e.target.textContent === 'neutral') {
      this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
      return;
    }
    if (e.target.textContent === 'bad') {
      this.setState(prevState => ({ bad: prevState.bad + 1 }));
      return;
    }
  };
  render() {
    const { good, bad, neutral } = this.state;
    const total = good + bad + neutral;
    const positivePercentage = Math.round((good * 100) / total);
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onClickIncrementValue}
          />
        </Section>
        <Section title={'Statistics'}>
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            ''
          )}
        </Section>
      </>
    );
  }
}
