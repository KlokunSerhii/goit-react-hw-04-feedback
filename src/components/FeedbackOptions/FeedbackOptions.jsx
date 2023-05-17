import PropTypes from 'prop-types';
import Button from './FeedbackOptions.styled';

function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <>
      <Button type="button" onClick={onLeaveFeedback} name="good">
        Good
      </Button>
      <Button type="button" onClick={onLeaveFeedback} name="neutral">
        Neutral
      </Button>
      <Button type="button" onClick={onLeaveFeedback} name="bad">
        Bad
      </Button>
    </>
  );
}
FeedbackOptions.prototype = {
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
