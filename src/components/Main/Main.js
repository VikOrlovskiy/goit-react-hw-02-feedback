import React, { Component } from 'react';

import Statistics from '../Statistics';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';

export default class Main extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onClickIncrementValue = e => {
    const activeBtnValue = e.target.textContent;
    this.setState(prevState => ({
      [activeBtnValue]: prevState[activeBtnValue] + 1,
    }));
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
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
