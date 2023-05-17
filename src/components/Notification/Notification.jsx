import PropTypes from 'prop-types';
import TitleMessage from './Notification.styled';

function Notification({ message }) {
  return <TitleMessage>{message}</TitleMessage>;
}

Notification.prototype = {
  message: PropTypes.string.isRequired,
};

export default Notification;
