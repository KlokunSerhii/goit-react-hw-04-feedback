import PropTypes from 'prop-types';
import Button from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(elem => (
    <Button key={elem} type="button" onClick={onLeaveFeedback} name={elem}>
      {elem}
    </Button>
  ));
}

FeedbackOptions.prototype = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
  }),
};

export default FeedbackOptions;
