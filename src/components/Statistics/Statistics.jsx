import PropTypes from 'prop-types';
import { TitleStatistics, ListItem, List } from './Statistics.styled';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <TitleStatistics>Statistics</TitleStatistics>
      <List>
        <ListItem>Good:{good}</ListItem>
        <ListItem>Neutral:{neutral}</ListItem>
        <ListItem>Bad:{bad}</ListItem>
        <ListItem>Total:{total} st</ListItem>
        <ListItem>Positive feedback:{positivePercentage}%</ListItem>
      </List>
    </>
  );
}
Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
