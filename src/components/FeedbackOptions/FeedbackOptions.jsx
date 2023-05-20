import PropTypes from 'prop-types';
import Button from './FeedbackOptions.styled';
import { nanoid } from 'nanoid';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(props => (
    <Button key={nanoid()} type="button" onClick={onLeaveFeedback} name={props}>
      {props}
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
