import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';
import { Container } from './App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = ({ target: { name } }) => {
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        console.log('Error');
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = totalFeedback => {
    if (totalFeedback > 0) {
      return Math.round((good / totalFeedback) * 100);
    }
    return 0;
  };
  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage(totalFeedback);
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={Object.keys({ good, neutral, bad })}
        />
      </Section>

      {totalFeedback > 0 && (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </Section>
      )}
      {!totalFeedback && (
        <Section>
          <Notification message="There is no feedback" />
        </Section>
      )}
    </Container>
  );
};

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   onLeaveFeedback = ({ target: { name } }) => {
//     this.setState(prevState => {
//       return {
//         [name]: prevState[name] + 1,
//       };
//     });
//   };
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };
//   countPositiveFeedbackPercentage = totalFeedback => {
//     const { good } = this.state;

//     if (totalFeedback > 0) {
//       return Math.round((good / totalFeedback) * 100);
//     }
//     return 0;
//   };

//   render() {
//     const totalFeedback = this.countTotalFeedback();
//     const positivePercentage =
//       this.countPositiveFeedbackPercentage(totalFeedback);
//     const { good, neutral, bad } = this.state;

//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             onLeaveFeedback={this.onLeaveFeedback}
//             options={Object.keys(this.state)}
//           />
//         </Section>

//         {totalFeedback > 0 && (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={totalFeedback}
//               positivePercentage={positivePercentage}
//             />
//           </Section>
//         )}
//         {!totalFeedback && (
//           <Section>
//             <Notification message="There is no feedback" />
//           </Section>
//         )}
//       </Container>
//     );
//   }
// }
export default App;
